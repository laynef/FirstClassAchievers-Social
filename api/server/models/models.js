// Interact with database on the models functions here
const Profile = require('../../../database/models/index').Profile

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
                location: req.body.location,
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
            /*
             Interact with database
            */
        },
        post: (req, res, next) => {
            /*
             Interact with database
            */
        }
    }
}
