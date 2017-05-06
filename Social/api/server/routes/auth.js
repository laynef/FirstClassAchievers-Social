const app = require('express')
const router = require('express').Router()
const User = require('../../../database/models/index').User
const Profile = require('../../../database/models/index').Profile
const Following = require('../../../database/models/index').Following
const Favorite = require('../../../database/models/index').Favorite
const bcrypt = require('bcrypt-nodejs')
const nodemailer = require('nodemailer')
const bunyan = require('bunyan')
const passport = require('passport')
const config = require('../../config/config')
const helper = require('sendgrid').mail


// local auth
router.get('/local/user/:id', (req, res, next) => {
    User.findAll({ where: {id: req.params.id} })
        .then(response => {
            res.status(200).send(response[0].dataValues)
        })
        .catch(error => {
            console.log(`Did not receive user data`, error)
            res.sendStatus(404)
        })
})

router.post('/local/login', (req, res, next) => {
    User.findAll({
        where: { email: req.body.email }
    }).then(response => {
        bcrypt.compare(req.body.password, response[0].dataValues.password, (err, result) => {
            if (result) {
                req.cookies.user = response[0].dataValues
                res.status(201).send(response[0].dataValues)
            } else {
                console.log(`Wrong password`, err)
                res.sendStatus(401)
            }
        })
    }).catch(error => {
        console.log(`Post request error`, error)
        res.sendStatus(501)
    })
})

router.post('/local/register', (req, res, next) => {
    let salt = bcrypt.genSaltSync(10)
    bcrypt.hash(req.body.password, salt, null, (err, hash) => {
        User.create({
            email: req.body.email,
            password: hash
        })
        .then(response => {
            console.log(`RESP`, response)
            Following.create({
                followers: [],
                user_id: response.dataValues.id
            })
            Favorite.create({
                user_id: response.dataValues.id,
                entries: []
            })
            Profile.create({
                firstName: null,
                lastName: null,
                city: null,
                goals: null,
                position: null,
                nickname: null,
                image: null,
                zipCode: null,
                state: null,
                country: null,
                user_id: response.dataValues.id
            })
            res.sendStatus(201)
            console.log(`sign up successful`)
        })
        .catch(error => {
            console.log(`sign up post call error: `, error)
            res.sendStatus(404)
        })
    })
})

router.get('/local/logout', (req, res, next) => {
    req.cookies.user = null
    res.sendStatus(200)
})

router.patch('/local/change/password', (req, res, next) => {
    User.findAll({
        where: { email: req.body.email }
    }).then(response => {
        let salt = bcrypt.genSaltSync(10)
        bcrypt.compare(req.body.password, response[0].dataValues.password, (err, result) => {
            bcrypt.hash(req.body.newPassword, salt, null, (errs, hash) => {
                if (result) {
                    User.update({
                        password: hash
                    }, { 
                        where: { id: response[0].dataValues.id }
                    })
                        .then(resp => {
                            req.cookies.user = resp
                            res.status(202).json(resp)
                        })
                        .catch(errs => {
                            console.log(`Update error`, errs)
                            res.sendStatus(404)
                        })
                } else {
                    console.log(`Wrong password`)
                    res.sendStatus(401)
                }
            })
        })
    }).catch(error => {
        console.log(`Patch request error`, error)
        res.sendStatus(501)
    })
})

router.post('/local/forgotten/password', (req, res, next) => {
    let fromEmail = new helper.Email('test@example.com')
    let toEmail = new helper.Email(req.body.email)
    let subject = 'Hello World from the SendGrid Node.js Library!'
    let content = new helper.Content('text/plain', 'Hello, Email!')
    let mail = new helper.Mail(fromEmail, subject, toEmail, content)
    let api_key = process.env.SENDGRID_API_KEY || config.SENDGRID_API_KEY
    let sg = require('sendgrid')(api_key)
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    })

    sg.API(request, function (error, response) {
        if (error) {
            console.log('Error response received')
        }
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
    })
})


// export router for server.js
module.exports = router
