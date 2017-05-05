// <a href="/auth/twitter">Sign in with Twitter</a>
const router = require('express').Router()
const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy

router.get('/auth/twitter', 
    passport.authenticate('twitter')
);

module.exports = router

