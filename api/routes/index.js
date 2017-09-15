const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: './images'});

// controllers
const authController = require('../controllers/auth');
const models = require('../controllers/models');

// Routes here

// auth
router.post('/auth/local/login', authController.login);
router.get('/auth/local/logout', authController.logout);
router.post('/auth/local/register/admin', authController.registerAdmin);
router.post('/auth/local/register/guest', authController.registerGuest);
router.post('/auth/local/register/visitor', authController.registerVisitor);
router.patch('/auth/local/change/password', authController.changePassword);

// profile
router.get('/profile/:userId', models.profile.get);
router.patch('/profile/:userId', models.profile.patch);

// testimonials
router.get('/testify', models.testify.get);
router.post('/testify', models.testify.post);

// following
router.get('/following/:userId', models.following.get);
router.patch('/following/:userId/:otherId', models.following.patch);

// favorites
router.get('/favorites/:userId', models.favorites.get);
router.patch('/favorites/:userId', models.favorites.patch);

// images
router.patch('/image/:userId', upload.single('image'), models.image.patch);

// friends
router.get('/friends/:userId', models.friends.get);

// messages
router.get('/messages/:userId/:otherId', models.messages.get);
router.post('/messages', models.messages.post);

// invite
router.post('/invite/:userId', models.invite.post);

// notifications
router.get('/notify/:userId', models.notify.get);
router.patch('/notify', models.notify.patch);

// comments
router.get('/comments', models.comments.all);
router.get('/comments/:entryId', models.comments.get);
router.post('/comments/:entryId', models.comments.post);


module.exports = router;
