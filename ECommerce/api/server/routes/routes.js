// calling controller functions when routes are hit
const router = require('express').Router()
const models = require('../models/models')

// api/ server roots

// user
router.get('/user', models.user.get)
router.post('/user', models.user.post)

// export router for server.js
module.exports = router