// call model functions in controller functions
const models = require('../models/models')

module.exports = {
    profile: {
        get: (req, res) => {
            /* can look something like this
                models.profile.get()*/ 
        },
        post: (req, res) => {
            /* can look something like this
                models.profile.post()*/ 
        }
    },
    testify: {
        get: (req, res) => {
            /* can look something like this
                models.testify.get()*/ 
        },
        post: (req, res) => {
            /* can look something like this
                models.testify.post()*/ 
        }
    }
}