// calling controller functions when routes are hit
const router = require('express').Router()
const models = require('../models/models')


// profile
router.get('/profile', models.profile.get)
router.post('/profile', models.profile.post)

router.get('/testify', models.testify.get)
router.post('/testify', models.testify.post)

// export router for server.js
module.exports = router