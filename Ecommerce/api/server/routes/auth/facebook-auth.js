// <a href="/auth/facebook">Login with Facebook</a>
const router = require('express').Router()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
)

module.exports = router
