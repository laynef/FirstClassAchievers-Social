// calling controller functions when routes are hit
const router = require('express').Router()
const models = require('../models/models')
const multer = require('multer')
// const upload = multer({dest: '../../../web/build/images'})
const upload = multer({dest: './images'})


router.get('/profile/:userId', models.profile.get)
router.patch('/profile/:userId', models.profile.patch)

router.get('/testify', models.testify.get)
router.post('/testify', models.testify.post)

router.get('/following/:userId', models.following.get)
router.patch('/following/:userId/:otherId', models.following.patch)

router.get('/favorites/:userId', models.favorites.get)
router.patch('/favorites/:userId', models.favorites.patch)

router.patch('/image/:userId', upload.single('image'), models.image.patch)

router.get('/friends/:userId', models.friends.get)

router.get('/messages/:userId/:otherId', models.messages.get)
router.post('/messages', models.messages.post)

router.post('/invite/:userId', models.invite.post)

router.get('/notify/:userId', models.notify.get)
router.patch('/notify', models.notify.patch)

router.get('/comments', models.comments.get)
router.post('/comments/:entryId', models.comments.post)

router.patch('/like/comment/:entryId', models.likes.comment.patch)
router.patch('/like/testify/:entryId', models.likes.testify.patch)


// export router for server.js
module.exports = router