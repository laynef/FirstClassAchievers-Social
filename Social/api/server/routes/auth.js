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
            res.sendStatus(400)
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
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'config.gmail_user',
            pass:  'config.gmail_pass'
        },
        logger: bunyan.createLogger({
            name: 'nodemailer'
        }),
        debug: true // include SMTP traffic in the logs
    }, {
        // default message fields

        // sender info
        from: 'First Class Achievers <no-reply@firstclass.net>',
        headers: {
            'X-Laziness-level': 1000 // just an example header, no need to use this
        }
    })

    console.log('SMTP Configured')

    // Message object
    let message = {

        // Comma separated list of recipients
        to: `${req.body.firstName} ${req.body.lastName} <${req.body.email}>`,

        // Subject of the message
        subject: 'Nodemailer is unicode friendly ✔ #', //

        // plaintext body
        text: `Hello ${req.body.firstName} ${req.body.lastName}!`,

        // HTML body
        html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
            '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

        // Apple Watch specific HTML body
        watchHtml: '<b>Hello</b> to myself',

        // An array of attachments
        attachments: [

            // String attachment
            {
                filename: 'notes.txt',
                content: 'Some notes about this e-mail',
                contentType: 'text/plain' // optional, would be detected from the filename
            },

            // Binary Buffer attachment
            {
                filename: 'image.png',
                content: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                    '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                    'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

                cid: 'note@example.com' // should be as unique as possible
            },

            // File Stream attachment
            {
                filename: 'nyan cat ✔.gif',
                path: __dirname + '/assets/nyan.gif',
                cid: 'nyan@example.com' // should be as unique as possible
            }
        ]
    }

    console.log('Sending Mail')
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred')
            console.log(error.message)
            return
        }
        console.log('Message sent successfully!')
        console.log('Server responded with "%s"', info.response)
        transporter.close()
    })
})


router.post('/local/fixtures', (req, res, next) => {
    let salt = bcrypt.genSaltSync(10)
    bcrypt.hash(req.body.password, salt, null, (err, hash) => {
        User.create({
            email: req.body.email,
            password: hash,
            image: req.body.image,
            id: req.body.id
        })
        .then(response => {
            Following.create({
                followers: [],
                user_id: req.body.id
            })
            Favorite.create({
                user_id: req.body.id,
                entries: []
            })
            Profile.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: null,
                goals: null,
                position: null,
                nickname: null,
                image: req.body.image,
                zipCode: null,
                state: null,
                country: null,
                user_id: req.body.id
            })
            res.sendStatus(201)
            console.log(`sign up successful`)
        })
        .catch(error => {
            console.log(`sign up post call error: `, error)
            res.sendStatus(400)
        })
    })
})


// export router for server.js
module.exports = router
