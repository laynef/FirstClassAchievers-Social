// Interact with database on the models functions here
const models = require('../../../database/models/index')

module.exports = {
    profile: {
        get: (req, res) => {
            models.Profile.findAll({
              where: { user_id: req.params.userId }  
            })
            .then(response => {
                res.status(201).json(response)
            }).catch(err => {
                res.sendStatus(401)
            })
        },
        patch: (req, res) => {
            models.Profile.update({
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
            }, { 
                where: { user_id: req.params.userId }
            })
            .then(response => {
                models.Profile.findAll({
                    where: {user_id: response[0]}
                })
                .then(resp => {
                    res.status(202).send(resp)
                })
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
