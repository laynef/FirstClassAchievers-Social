// Interact with database on the models functions here
const Profile = require('../../../database/models/index').Profile
const Testimonial = require('../../../database/models/index').Testimonial
const Following = require('../../../database/models/index').Following
const Favorite = require('../../../database/models/index').Favorite
const User = require('../../../database/models/index').User
const Message = require('../../../database/models/index').Message
const Notification = require('../../../database/models/index').Notification
const Comment = require('../../../database/models/index').Comment
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const cloudinary = require('cloudinary')
const store = require('../cache/store')


cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.cloud_api_key,
    api_secret: process.env.cloud_api_secret
})

module.exports = {
    profile: {
        get: (req, res, next) => {
            if (store.profile.all[req.params.userId] == undefined) {
                Profile.findAll({
                    where: { user_id: req.params.userId }  
                })
                .then(response => {
                    res.status(201).json(response[0])
                    store.profile.all[req.params.userId] = response[0]
                }).catch(err => {
                    res.sendStatus(401)
                })
            } else {
                res.status(200).send(store.profile.all[req.params.userId])
            }
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
                store.profile.all[req.params.userId].dataValues.firstName = req.body.firstName
                store.profile.all[req.params.userId].dataValues.lastName = req.body.lastName
                store.profile.all[req.params.userId].dataValues.city = req.body.city
                store.profile.all[req.params.userId].dataValues.goals = req.body.goals
                store.profile.all[req.params.userId].dataValues.position = req.body.position
                store.profile.all[req.params.userId].dataValues.nickname = req.body.nickname
                store.profile.all[req.params.userId].dataValues.image = req.body.image
                store.profile.all[req.params.userId].dataValues.zipCode = req.body.zipCode
                store.profile.all[req.params.userId].dataValues.state = req.body.state
                store.profile.all[req.params.userId].dataValues.country = req.body.country
                res.status(202).send(store.profile.all[req.params.userId])
            })
        }
    },
    testify: {
        get: (req, res, next) => {
            Testimonial.findAll({
                offset: _.size(store.testimonials.all) || 0
            })
            .then(response => {
                response.forEach(e => {
                    store.testimonials.all[e.dataValues.id] = e
                })
                res.status(200).send(Object.values(store.testimonials.all))
            })
        },
        post: (req, res, next) => {
            Testimonial.create({
                author: req.body.author,
                message: req.body.message,
                user_id: req.body.userId,
                image: req.body.image,
                likes: []
            })
            .then(response => {
                res.status(200).send(response)
                store.testimonials.all[response.dataValues.id] = response
            })
        }
    },
    following: {
        get: (req, res, next) => {
            if (store.followings[req.params.userId] == undefined) {
                Following.findAll({
                    where: { user_id: req.params.userId }
                })
                .then(response => {
                    res.status(200).send(response[0])
                    store.followings[req.params.userId] = response[0]
                })
            } else {
                res.status(200).send(store.followings[req.params.userId])
            }
        },
        patch: (req, res, next) => {
            Following.update({
                followers: req.body.followers
            }, {
                where: { user_id: req.params.userId }
            })
            .then(response => {
                store.followings[req.params.userId].dataValues.followers = req.body.followers
                Notification.create({
                    user_id: req.params.otherId,
                    message: `${store.profile.all[req.params.userId].dataValues.firstName} ${store.profile.all[req.params.userId].dataValues.lastName} started following you`,
                    seen: false,
                    image: store.profile.all[req.params.userId].dataValues.image,
                    type: 'FOLLOW',
                    from: store.profile.all[req.params.userId].dataValues.id
                })
            })
        }
    },
    favorites: {
        get: (req, res, next) => {
            if (store.favorites[req.params.userId] == undefined) {
                Favorite.findAll({
                    where: { user_id: req.params.userId }
                })
                .then(response => {
                    res.status(200).send(response[0])
                    store.favorites[req.params.userId] = response[0]
                })
            } else {
                res.status(200).send(store.favorites[req.params.userId])
            }
        },
        patch: (req, res, next) => {
            Favorite.update({
                entries: req.body.entries
            }, {
                where: { user_id: req.params.userId }
            })
            .then(response => {
                store.favorites[req.params.userId].dataValues.entries = req.body.entries
                res.status(200).send(store.favorites[req.params.userId])
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
                store.profile.all[req.params.userId].dataValues.image = imgPath
                store.testimonials.all[req.params.userId].dataValues.image = imgPath
                store.user.dataValues.image = imgPath
            })
        }
    },
    friends: {
        get: (req, res, next) => {
            let friends = []
            Following.findAll({ where: {user_id: req.params.userId} })
                .then(response => {
                    response[0].dataValues.followers.forEach((e, i, a) => {
                        if (store.profile.all[e] == undefined) {
                        Profile.findAll({ where: {user_id: e} })
                            .then(resp => {
                                friends.push(resp[0].dataValues)
                                if (i + 1 == response[0].dataValues.followers.length) {
                                    let array = _.uniq(friends)
                                    res.status(200).send(array)
                                }
                            })
                        } else {
                            friends.push(store.profile.all[e].dataValues)
                            if (i + 1 == response[0].dataValues.followers.length) {
                                let array = _.uniq(friends)
                                res.status(200).send(array)
                            }
                        }
                    })
                })
        }
    },
    messages: {
        get: (req, res, next) => {
            Message.findAll({
                where: { room_name: [`_${req.params.userId}-${req.params.otherId}_`, `_${req.params.otherId}-${req.params.userId}_`] }
            })
            .then(response => {
                response.sort((a, b) => a.id - b.id)
                res.status(200).send(response)
            })
        },
        post: (req, res, next) => {
            Message.create({
                message: req.body.message,
                user_id: req.body.user_id,
                room_name: req.body.roomNameId,
                to: req.body.to
            })
            .then(resp => {
                Notification.create({
                    user_id: req.body.to,
                    message: `${store.profile.all[req.body.user_id].dataValues.firstName} ${store.profile.all[req.body.user_id].dataValues.lastName} sent you a message`,
                    seen: false,
                    image: store.profile.all[req.body.user_id].dataValues.image,
                    type: 'MESSAGE',
                    from: req.body.user_id
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
                    store.followings[req.params.user_id].dataValues.followers = array
                }
                Notification.create({
                    user_id: req.body.friend,
                    message: `${store.profile.all[req.params.user_id].dataValues.firstName} ${store.profile.all[req.params.user_id].dataValues.lastName} invited you to chat`,
                    seen: false,
                    image: store.profile.all[req.params.user_id].dataValues.image,
                    type: 'INVITE',
                    from: store.profile.all[req.params.user_id].dataValues.id
                })
            })
        }
    },
    notify: {
        get: (req, res, body) => {
            Notification.findAll({
                where: { 
                    user_id: req.params.userId,
                },
                offset: _.size(store.notifications) || 0
            })
            .then(resp => {
                resp.forEach(e => {
                    store.notifications[e.dataValues.id] = e
                })
                res.status(200).send(Object.values(store.notifications))
            })
        },
        patch: (req, res, body) => {
            Notification.update({
                seen: true
            }, {
                where: { id: req.body.note_id }
            })
            .then(response => {
                store.notifications[req.body.note_id].dataValues.seen = true
                res.status(202).send(Object.values(store.notifications[req.body.note_id]))
            })
        }
    },
    comments: {
        all: (req, res, next) => {
            Comment.findAll({
                offset: _.size(store.comments) || 0
            })
            .then(resp => {
                let data = {}
                resp.forEach(e => {
                    store.comments[e.dataValues.post_id] = store.comments[e.dataValues.post_id] ? store.comments[e.dataValues.post_id] : {}
                    store.comments[e.dataValues.post_id][e.dataValues.id] = e
                })
                _.each(store.comments, (e, i) => {
                    data[i] = Object.values(e)
                })
                res.status(200).send(data)
            })
        },
        get: (req, res, next) => {
            Comment.findAll({
                where: { 
                    post_id: req.params.entryId,
                },
                offset: _.size(store.comments[req.params.entryId]) || 0
            })
            .then(resp => {
                resp.forEach(e => {
                    store.comments[req.params.entryId][e.dataValues.id] = e
                })
                res.status(200).send(Object.values(store.comments[req.params.entryId]))
            })
        },
        post: (req, res, next) => {
            Comment.create({
                post_id: req.params.entryId,
                message: req.body.message,
                user_id: req.body.user_id,
                author: req.body.author,
                image: req.body.image,
                likes: []
            })
            .then(resp => {
                if (req.body.user_id != req.body.to) {
                    Notification.create({
                        user_id: req.body.to,
                        message: `${req.body.author} left a comment`,
                        seen: false,
                        image: req.body.image,
                        type: 'COMMENT',
                        from: req.params.entryId
                    })
                    .then(response => {
                        store.notifications[response.dataValues.id] = response
                        store.comments[req.params.entryId][resp.dataValues.id] = resp
                        res.status(200).send(store.comments[req.params.entryId][resp.dataValues.id])
                    })
                }
                store.comments[req.params.entryId][resp.dataValues.id] = resp
                res.status(200).send(store.comments[req.params.entryId][resp.dataValues.id])
            })
        }
    },
    likes: {
        comment: {
            patch: (req, res, next) => {
                Comment.findAll({
                    where: {id: req.params.entryId}  
                })
                .then(resp => {
                    let likes = resp[0].dataValues.likes.slice()
                    if (likes.includes(req.body.user_id)) {
                        _.pull(likes, req.body.user_id)
                    } else {
                        likes.push(req.body.user_id)
                    }
                    Comment.update({
                        likes: likes
                    }, {
                        where: {id: req.params.entryId}
                    })
                    .then(respond => {
                        if (req.body.user_id != req.body.to) {
                            Notification.create({
                                user_id: req.body.to,
                                message: `${req.body.author} like your comment`,
                                seen: false,
                                image: req.body.image,
                                type: 'LIKE',
                                from: req.params.entryId
                            })
                            .then(response => {
                                store.notifications[response.dataValues.id] = response
                                store.comments[resp.dataValues.post_id][req.params.entryId] = response
                                res.status(202).send(store.comments[resp.dataValues.post_id][req.params.entryId])
                            })
                        } else {
                            store.comments[resp.dataValues.post_id][req.params.entryId] = response
                            res.status(202).send(store.comments[resp.dataValues.post_id][req.params.entryId])
                        }
                    })
                })
            }
        },
        testify: {
            patch: (req, res, next) => {
                let likes = store.testimonials.all[req.params.entryId].dataValues.likes.slice()
                if (likes.includes(req.body.user_id)) {
                    _.pull(likes, req.body.user_id)
                } else {
                    likes.push(req.body.user_id)
                }
                Testimonial.update({
                    likes: likes
                }, {
                    where: {id: req.params.entryId}
                })
                .then(resp => {
                    if (req.body.user_id != req.body.to) {
                        Notification.create({
                            user_id: req.body.to,
                            message: `${req.body.author} like your post`,
                            seen: false,
                            image: req.body.image,
                            type: 'LIKE',
                            from: req.params.entryId
                        })
                        .then(response => {
                            store.notifications[response.dataValues.id] = response
                            store.testimonials.all[req.params.entryId].dataValues.likes = likes
                            res.status(202).send(store.testimonials.all[req.params.entryId])
                        })
                    } else {
                        store.testimonials.all[req.params.entryId].dataValues.likes = likes
                        res.status(202).send(store.testimonials.all[req.params.entryId])
                    }
                })
            }
        }
    }
}