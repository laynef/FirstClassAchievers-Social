const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes/routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const favicon = require('express-favicon')
const fs = require('fs')


// port settings
let port = process.env.PORT || 3232

// web socket protocol on localhost on port 3333
server.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})

// Middleware
// Body Parser, Morgan, and Public Compiled folder
app.use(favicon(__dirname + '/../../web/public/favicon.ico'))
app.use(express.static(__dirname + '/../../web/public'))
app.use(cors())
app.use(morgan('dev'))
app.use(parser.urlencoded({ extended: true}))
app.use(parser.json())
app.use(cookieParser())

app.use('/api', routes) // when you add api routes in routes.js

// Render the index.html
app.get('/', (req, res) => { 
    res.sendFile('index.html') 
})

app.get('*', (req, res) => {
    res.redirect('/')
})

// Web socket on connection 
io.on('connection', (socket) => {
    setTimeout(() => {
        fs.watch(__dirname + '/../', {recursive: true}, (e, o) => {
            if (e === 'rename' || e === 'change') {
                socket.emit('save')
            }
        })
    }, 1000)
})