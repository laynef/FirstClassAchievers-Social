// Interact with database on the models functions here
const models = require('../../../database/models/index')
const Profile = require('../../../database/models/index').Profile

module.exports = {
    profile: {
        get: (req, res) => {
            Profile.findAll({
              where: { user_id: req.params.userId }  
            })
            .then(response => {
                res.status(201).send(response.dataValues)
            }).catch(err => {
                res.sendStatus(401)
            })
        },
        patch: (req, res) => {
            Profile.update({
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
