// Interact with database on the models functions here
const models = require('../../../database/models/index')

module.exports = {
    profile: {
        get: (req, res) => {
            models.Profile.findAll({
              where: { user_id: req.body.userId }  
            })
            .then(response => {
                res.status(201).send(response[0].dataValues)
            }).catch(err => {
                res.sendStatus(401)
            })
        },
        post: (req, res) => {
            db.Profile.findAll({
                where: { user_id: req.body.userId }
            })
            .then(profile => {
                profile.destroy()
                profile.create({
                    firstName: req.body.firstName || null,
                    lastName: req.body.lastName || null,
                    location: req.body.location || null,
                    goals: req.body.goals || null,
                    position: req.body.position || null,
                    nickname: req.body.nickname || null,
                    image: req.body.image || null,
                    zipCode: req.body.zipCode || null,
                    state: req.body.state || null,
                    country: req.body.country || null
                })
            })
            .catch(err => {
                res.status(404).send(err)
            })
        }
    },
    testify: {
        get: (req, res) => {
            /*
             Interact with database
            */
        },
        post: (req, res) => {
            /*
             Interact with database
            */
        }
    }
}
