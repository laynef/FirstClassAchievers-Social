// calling controller functions when routes are hit
const router = require('express').Router()
const models = require('../models/models')


router.get('/profile/:userId', models.profile.get)
router.patch('/profile/:userId', models.profile.patch)

router.get('/testify', models.testify.get)
router.post('/testify', models.testify.post)

router.get('/following/:userId', models.following.get)
router.patch('/following/:userId', models.following.patch)

router.get('/favorites/:userId', models.favorites.get)
router.patch('/favorites/:userId', models.favorites.patch)


// export router for server.js
module.exports = router