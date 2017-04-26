// Interact with database on the models functions here
const Profile = require('../../../database/models/index').Profile
const Testimonial = require('../../../database/models/index').Testimonial
const Following = require('../../../database/models/index').Following
const Favorite = require('../../../database/models/index').Favorite
const User = require('../../../database/models/index').User
const fs = require('fs')
const path = require('path')
const _ = require('lodash')


module.exports = {
    profile: {
        get: (req, res, next) => {
            Profile.findAll({
              where: { user_id: req.params.userId }  
            })
            .then(response => {
                res.status(201).json(response[0])
            }).catch(err => {
                res.sendStatus(401)
            })
        },
        patch: (req, res, next) => {
            let image = req.body.image
            let arr = req.body.image.split('')
            let file = arr[req.body.image.length - 1] + arr[req.body.image.length - 2] + arr[req.body.image.length - 3]
            let imgPath = `images/${req.params.userId}.${file}`
            let buff = Buffer.from(req.body.image)
            if (image != imgPath) {
                let buff = Buffer.from(req.body.image)
                fs.writeFileSync(__dirname + `/../../../web/public/images/${req.params.userId}.${file}`, buff) 
            }
            User.update({
                image: image
            }, {
                where: { id: req.params.userId }
            })
            Testimonial.update({
                image: image
            }, {
                where: { user_id: req.params.userId }
            })
            Profile.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
                goals: req.body.goals,
                position: req.body.position,
                nickname: req.body.nickname,
                image: imgPath,
                zipCode: req.body.zipCode,
                state: req.body.state,
                country: req.body.country
            }, {
                where: { user_id: req.params.userId }
            })
            .then(response => {
                Profile.findAll({
                    where: { user_id: req.params.userId }
                })
                .then(resp => {
                    res.status(202).send(resp[0])
                })
            })
        }
    },
    testify: {
        get: (req, res, next) => {
            Testimonial.findAll()
                .then(response => {
                    res.status(200).send(response)
                })
        },
        post: (req, res, next) => {
            Testimonial.create({
                author: req.body.author,
                message: req.body.message,
                user_id: req.body.userId,
                image: req.body.image,
                likes: 0
            })
            .then(response => {
                Testimonial.findAll()
                    .then(resp => {
                        res.status(200).send(resp)
                    })
            })
        }
    },
    following: {
        get: (req, res, next) => {
            Following.findAll({
                where: { user_id: req.params.userId }
            })
            .then(response => {
                res.status(200).send(response[0])
            })
        },
        patch: (req, res, next) => {
            Following.update({
                followers: req.body.followers
            }, {
                where: { user_id: req.params.userId }
            })
            .then(response => {
                Following.findAll({
                    where: { user_id: req.params.userId }
                })
                .then(resp => {
                    res.status(200).send(resp[0])
                })
            })
        }
    },
    favorites: {
        get: (req, res, next) => {
            Favorite.findAll({
                where: { user_id: req.params.userId }
            })
            .then(response => {
                res.status(200).send(response[0])
            })
        },
        patch: (req, res, next) => {
            Favorite.update({
                entries: req.body.entries
            }, {
                where: { user_id: req.params.userId }
            })
            .then(response => {
                Favorite.findAll({
                    where: { user_id: req.params.userId }
                })
                .then(resp => {
                    res.status(200).send(resp[0])
                })
            })
        }
    }
}
