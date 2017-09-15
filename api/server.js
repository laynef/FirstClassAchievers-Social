const Express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const parser = require('body-parser');
const router = require('./routes/index');
const amqp = require('amqp');
const sess = require('express-session');
const RedisStore = require('connect-redis')(sess);
const http = require('http');
let client = require('./caches/redis');

// Express servers
const app = new Express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
io.path('/ws');
const messager = amqp.createConnection({url: process.env.RABBIT_PORT});

// Middleware Functions
const shouldCompress = (req, res) => (req.headers['x-no-compression'] ? false : compression.filter(req, res));

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(compression({ filter: shouldCompress }));
app.use(sess({
	secret: 'secret',
	store: new RedisStore({ url: process.env.REDIS_PORT, client: client, disableTTL: true, port: 9999 }),
	saveUninitialized: true,
	resave: false,
	name: 'NewProject',
	cookie: {
		sameSite: true,
	},
}));

app.use('/api/v1', router);

let runnable = app.listen(process.env.PROXIMO_URL, () => {

	let usersOnline = {};

	messager.on('ready', () => {
		messager.queue('simple', { autoDelete: false }, (tail) => {
			io.sockets.on('connection', (socket) => {

				tail.subscribe((message) => {
					socket.emit('refreshChat', 'connected', message.data.toString('utf-8'));
					socket.broadcast.emit('refreshChat', 'connected', message.data.toString('utf-8'));
				});

				socket.on('loginUser', (username) => {
					console.log(`SERVER USERNAME ${username}`);
					if (usersOnline[username]) {
						socket.emit('userInUse');
						return;
					}
					socket.username = username;
					usersOnline[username] = socket.username;
					socket.emit('refreshChat', 'hello', `Nice, ${socket.username} has been connected`);
					socket.broadcast.emit('refreshChat', 'hello', `Nice, ${socket.username} has been connected`);
					io.sockets.emit("updateUsers", usersOnline);
					console.log(`SERVER USERS ${usersOnline}`);
				});

				socket.on('addNewMessage', (message) => {
					socket.emit('refreshChat', 'msg', `Message: ${message}`);
					socket.broadcast.emit('refreshChat', 'msg', `Message: ${message}`);
					console.log(`SERVER MSG ${message}`);
				});

				socket.on('disconnect', () => {
					if (typeof (socket.username) == 'undefined') return;
					delete usersOnline[socket.username];
					io.sockets.emit('updateUsers', usersOnline);
					socket.broadcast.emit('refreshChat', 'disconnect', `${socket.username} is disconnected`);
					console.log(`SERVER DISCONNECT ${socket.username}`);
				});

			});
		});
	});
	io.listen(runnable);
});
