const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes/routes')
const local = require('./routes/local-auth')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const favicon = require('express-favicon')
const flash = require('express-flash')
const fs = require('fs')
const config = require('../config/config')


// port settings
let port = process.env.PORT || 2424

// web socket protocol on localhost on port 2424
server.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})

// Middleware
// Body Parser, Morgan, and Public Compiled folder
app.set('volume', config.volume)
app.use(cors({origin: true}))
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

app.use('/api/user', routes) // when you add api routes in routes.js
app.use('/api/auth', local) // when you add api routes in routes.js

module.exports = app
