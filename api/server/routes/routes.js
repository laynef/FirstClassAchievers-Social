// calling controller functions when routes are hit
const router = require('express').Router()
const models = require('../models/models')
const multer = require('multer')
const upload = multer({dest: '../web/public/images'})


router.get('/profile/:userId', models.profile.get)
router.patch('/profile/:userId', models.profile.patch)

router.get('/testify', models.testify.get)
router.post('/testify', models.testify.post)

router.get('/following/:userId', models.following.get)
router.patch('/following/:userId', models.following.patch)

router.get('/favorites/:userId', models.favorites.get)
router.patch('/favorites/:userId', models.favorites.patch)

router.patch('/image/:userId', upload.single('image'), models.image.patch)

router.get('/friends/:userId', models.friends.get)


// export router for server.js
module.exports = router