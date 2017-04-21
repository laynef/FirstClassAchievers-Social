// Interact with database on the models functions here
const Profile = require('../../../database/models/index').Profile
const Testimonial = require('../../../database/models/index').Testimonial
const fs = require('fs')


module.exports = {
    profile: {
        get: (req, res, next) => {
            Profile.findAll({
              where: { user_id: req.params.userId }  
            })
            .then(response => {
                let resp = response[0]
                if (resp.image) {
                    fs.writeFileSync(
                        __dirname + '/../../../web/public/image/' + resp.user_id + '.png',
                        resp.image,
                        'base64'
                    )
                    resp.image = 'image/' + resp.user_id + '.png'
                }
                res.status(201).json(response[0])
            }).catch(err => {
                res.sendStatus(401)
            })
        },
        patch: (req, res, next) => {
            let image = req.body.image
            if (req.body.image) {
                image = fs.readFileSync(req.body.image).toString('base64')
            }
            Profile.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
                goals: req.body.goals,
                position: req.body.position,
                nickname: req.body.nickname,
                image: image,
                zipCode: req.body.zipCode,
                state: req.body.state,
                country: req.body.country
            }, {
                where: { user_id: req.params.userId }
            })
            .then(response => {
                Profile.findAll({
                    where: {user_id: response[0]}
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
                likes: 0
            })
            .then(response => {
                Testimonial.findAll({})
                    .then(resp => {
                        res.status(200).send(resp)
                    })
            })
        }
    }
}
