// Interact with database on the models functions here
const Profile = require('../../../database/models/index').Profile
const Testimonial = require('../../../database/models/index').Testimonial
const Following = require('../../../database/models/index').Following
const Favorite = require('../../../database/models/index').Favorite
const User = require('../../../database/models/index').User
const Message = require('../../../database/models/index').Message
const Notification = require('../../../database/models/index').Notification
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const cloudinary = require('cloudinary')
const config = require('../../config/config')


cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.cloud_api_key,
    api_secret: config.cloud_api_secret
})

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
            Profile.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
                goals: req.body.goals,
                position: req.body.position,
                nickname: req.body.nickname,
                image: req.body.image,
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
                        if (resp[0].dataValues.followers.indexOf(Number(req.params.otherId)) != -1) {
                        Profile.findAll({ where: {user_id: req.params.userId} })
                            .then(respond => {
                                Notification.create({
                                    user_id: req.params.otherId,
                                    message: `${respond[0].dataValues.firstName} ${respond[0].dataValues.lastName} started following you`,
                                    seen: false,
                                    image: respond[0].dataValues.image,
                                    type: 'FOLLOW',
                                    from: respond[0].dataValues.id
                                })
                            })
                        }
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
    },
    image: {
        patch: (req, res, next) => {
            cloudinary.uploader.upload(req.file.path, (result) => {
                let imgPath = result.url
                Profile.update({
                    image: imgPath
                }, {
                    where: { user_id: req.params.userId }
                })
                Testimonial.update({
                    image: imgPath
                }, {
                    where: { user_id: req.params.userId }
                })
                User.update({
                    image: imgPath
                }, {
                    where: { id: req.params.userId }
                })
                .then(response => res.sendStatus(202))
            })
        }
    },
    friends: {
        get: (req, res, next) => {
            let friends = []
            Following.findAll({ where: {user_id: req.params.userId} })
                .then(response => {
                    response[0].dataValues.followers.forEach(e => {
                        Profile.findAll({ where: {user_id: e} })
                            .then(resp => {
                                friends.push(resp[0].dataValues)
                            })
                    })
                })
            let promise = new Promise((resolve) => {
                setTimeout(() => resolve(), 500)
            })
            promise.then(success => { 
                let array = _.uniq(friends)
                res.status(200).send(array)
            })
        }
    },
    messages: {
        get: (req, res, next) => {
            let array1 = []
            let array2 = []
            Message.findAll({
                where: { room_name: `_${req.params.userId}-${req.params.otherId}_` }
            })
            .then(resp => {
                array1 = resp.map(e => e.dataValues)
                Message.findAll({
                    where: { room_name: `_${req.params.otherId}-${req.params.userId}_` }
                })
                .then(response => {
                    array2 = response.map(e => e.dataValues)
                })
                let promise = new Promise((resolve) => {
                    setTimeout(() => resolve(), 500)
                })
                promise.then(success => { 
                    let array = _.uniq(array1.concat(array2))
                        .sort((a, b) => a.id - b.id)
                    res.status(200).send(array)
                })
            })
        },
        post: (req, res, next) => {
            Message.create({
                message: req.body.message,
                user_id: req.body.user_id,
                room_name: req.body.roomNameId,
                to: req.body.to
            }).then(resp => {
                Profile.findAll({ where: {user_id: req.body.user_id} })
                    .then(respond => {
                        Notification.create({
                            user_id: req.body.to,
                            message: `${respond[0].dataValues.firstName} ${respond[0].dataValues.lastName} sent you a message`,
                            seen: false,
                            image: respond[0].dataValues.image,
                            type: 'MESSAGE',
                            from: respond[0].dataValues.id
                        })
                    })
            })
        }
    },
    invite: {
        post: (req, res, next) => {
            Following.findAll({
                where: { user_id: req.params.userId }
            })
            .then(response => {
                let array = response[0].dataValues.followers
                if (!array.includes(req.body.friend)) {
                    array.push(req.body.friend)
                    Following.update({
                        followers: array
                    }, {
                        where: { user_id: req.params.userId }
                    })
                }
                Profile.findAll({ where: {user_id: req.params.userId} })
                    .then(respond => {
                        Notification.create({
                            user_id: req.body.friend,
                            message: `${respond[0].dataValues.firstName} ${respond[0].dataValues.lastName} invited you to chat`,
                            seen: false,
                            image: respond[0].dataValues.image,
                            type: 'INVITE',
                            from: respond[0].dataValues.id
                        })
                    })
            })
        }
    },
    notify: {
        get: (req, res, body) => {
            Notification.findAll({
                where: { user_id: req.params.userId }
            })
            .then(resp => {
                res.status(200).send(resp)
            })
        },
        patch: (req, res, body) => {
            Notification.update({
                seen: true
            }, {
                where: { id: req.body.note_id }
            })
        }
    }
}
