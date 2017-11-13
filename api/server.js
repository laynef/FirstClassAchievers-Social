const Express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const parser = require('body-parser');
const router = require('./routes/index');
const sess = require('express-session');
const RedisStore = require('connect-redis')(sess);
const config = require('../config/config');
let client = require('./caches/redis');

// Express servers
const app = new Express();

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
	store: new RedisStore({ url: 'redis://localhost', client: client, disableTTL: true }),
	saveUninitialized: true,
	resave: false,
	name: 'NewProject',
	cookie: {
		sameSite: true,
	},
}));

app.use('/api/v1', router);
app.use('/', (req, res) => {
	res.status(200).send('on');
});

app.listen(8325);
