// calling controller functions when routes are hit
const router = require('express').Router()
const controllers = require('../controllers/controllers')


// profile
router.get('/profile', controllers.profile.get)
router.post('/profile', controllers.profile.post)

router.get('/testify', controllers.testify.get)
router.post('/testify', controllers.testify.post)

// export router for server.js
module.exports = router