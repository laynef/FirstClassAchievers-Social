const Express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const parser = require('body-parser');
const router = require('./routes/index');
// const amqp = require('amqp');
const sess = require('express-session');
const RedisStore = require('connect-redis')(sess);
// const http = require('http');
let client = require('./caches/redis');

// Express servers
const app = new Express();
// const server = http.createServer(app);
// const io = require('socket.io').listen(server);
// io.path('/ws');
// const messager = amqp.createConnection({url: process.env.RABBIT_PORT});

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

app.listen(process.env.PROXIMO_URL);
