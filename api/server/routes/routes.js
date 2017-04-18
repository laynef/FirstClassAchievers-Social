// calling controller functions when routes are hit
const router = require('express').Router()
const controllers = require('../controllers/controllers')

// api/ server roots
router.use((req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token']
    if (token) {
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' })    
            } else {
                req.decoded = decoded    
                next()
            }
        })
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        })
    }
})

// user
router.get('/user', controllers.user.get)
router.post('/user', controllers.user.post)

// export router for server.js
module.exports = router