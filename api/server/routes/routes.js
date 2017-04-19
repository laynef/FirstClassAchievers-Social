// calling controller functions when routes are hit
const router = require('express').Router()
const models = require('../models/models')


// profile
router.get('/profile/:userId', models.profile.get)
router.patch('/profile/:userId', models.profile.patch)

// router.get('/testify', models.testify.get)
// router.post('/testify', models.testify.post)

// export router for server.js
module.exports = router