const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes/routes')
const local = require('./routes/auth')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const favicon = require('express-favicon')
const fs = require('fs')
const flash = require('express-flash')
const _ = require('lodash')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy
const TwitterStrategy = require('passport-twitter').Strategy
const config = require('../config/config')
const User = require('../../database/models/user')


let users = {}
let rooms = []

// port settings
let port = process.env.PORT || 3214

// web socket protocol on localhost on port 3214
server.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})

// Middleware
// Body Parser, Morgan, and Build Compiled folder
app.use(favicon(__dirname + '/../../web/build/favicon.ico'))
app.use(express.static(__dirname + '/../../web/build'))
app.use(cors({origin: '*'}))
app.use(morgan('dev'))
app.use(parser.urlencoded({ extended: true}))
app.use(parser.json())
app.use(session({ 
    secret: 'fuck_hackers', 
    resave: true, 
    saveUninitialized: true 
}))
app.use(cookieParser())
app.use(flash())

// Social Media Logins
passport.use(new FacebookStrategy({
    clientID: config.facebook_api_key,
    clientSecret: config.facebook_api_secret,
    callbackURL: "https://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({where: {email: profile.emails[0]} }, function(err, user) {
      if (err) { return done(err) }
      done(null, user)
    })
  }
))
passport.use(new TwitterStrategy({
    consumerKey: config.twitter_api_key,
    consumerSecret: config.twitter_api_secret,
    callbackURL: "https://www.example.com/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate({where: {email: profile.emails[0]} }, function(err, user) {
      if (err) { return done(err) }
      done(null, user)
    })
  }
))
passport.use(new GoogleStrategy({
    consumerKey: config.google_client_id,
    consumerSecret: config.google_client_secret,
    callbackURL: "https://www.example.com/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ where: {email: profile.emails[0]} }, function (err, user) {
        return done(err, user)
      })
  }
))

app.use('/api', routes) // when you add api routes in routes.js
app.use('/auth', local) // when you add api routes in routes.js

// Render the index.html
app.get('/', (req, res) => { 
    res.sendFile('index.html') 
})

app.get('*', (req, res) => {
    res.redirect('/')
})

io.on('connection', (socket) => {

	socket.on('enter', function(data){
		socket.user = data.user
		socket.room1 = data.room1
		socket.room2 = data.room2
        rooms.push(data.room1)
        rooms.push(data.room2)
		users[data.user] = data.user
		socket.join(data.room1)
		socket.join(data.room2)
		socket.emit('updatechat', 'SERVER', 'you have connected to rooms')
		socket.broadcast.to(data.room1).emit('updatechat', 'SERVER', data.user + ' has connected to this room')
		socket.broadcast.to(data.room2).emit('updatechat', 'SERVER', data.user + ' has connected to this room')
		socket.emit('updaterooms', rooms, data.room1)
		socket.emit('updaterooms', rooms, data.room2)
	})

	socket.on('sendchat', function (data) {
		io.sockets.in(socket.room1).emit('updatechat', socket.user, data)
		io.sockets.in(socket.room2).emit('updatechat', socket.user, data)
	})

	socket.on('leaveRoom', function(){
		socket.leave(socket.room1)
		socket.leave(socket.room2)
		socket.broadcast.to(socket.room1).emit('updatechat', 'SERVER', socket.user + ' has left this room')
		socket.broadcast.to(socket.room2).emit('updatechat', 'SERVER', socket.user + ' has left this room')
	})

    socket.on('disconnect', function(){
		delete users[socket.user]
		io.sockets.emit('updateusers', users)
		socket.broadcast.emit('updatechat', 'SERVER', socket.user + ' has disconnected')
		socket.leave(socket.room1)
		socket.leave(socket.room2)
    })
})