//  <a href="/auth/google">Sign In with Google</a>
const router = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

router.get('/auth/google',
  passport.authenticate('google', { 
      scope: ['https://www.googleapis.com/auth/plus.login'] 
    }));

module.exports = router