// call model functions in controller functions
const models = require('../models/models')

module.exports = {
    user: {
        get: (req, res) => {
            /* can look something like this
                models.user.get()*/ 
        },
        post: (req, res) => {
            /* can look something like this
                models.user.post()*/ 
        }
    }
    
}