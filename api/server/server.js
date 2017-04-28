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
const fs = require('fs')
const flash = require('express-flash')
const _ = require('lodash')


let users = {}
let rooms = []

// port settings
let port = process.env.PORT || 3214

// web socket protocol on localhost on port 3214
server.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})

// Middleware
// Body Parser, Morgan, and Public Compiled folder
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
		socket.emit('updatechat', 'SERVER', 'you have connected to room1')
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