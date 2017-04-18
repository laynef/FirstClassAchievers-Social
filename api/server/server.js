const express = require('express')
const app = express()
const server = require('http').Server(app)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes/routes')
const local = require('./routes/local-auth')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const favicon = require('express-favicon')
const fs = require('fs')
const config = require('../config/config')
const flash = require('express-flash')


// port settings
let port = process.env.PORT || 3232

// web socket protocol on localhost on port 3232
server.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})

// Middleware
// Body Parser, Morgan, and Public Compiled folder
app.set('volume', config.volume)
app.use(favicon(__dirname + '/../../web/public/favicon.ico'))
app.use(express.static(__dirname + '/../../web/public'))
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

app.use('/api', routes) // when you add api routes in routes.js
app.use('/auth', local) // when you add api routes in routes.js

// Render the index.html
app.get('/', (req, res) => { 
    res.sendFile('index.html') 
})

app.get('*', (req, res) => {
    res.redirect('/')
})
