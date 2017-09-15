import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import favicon from 'serve-favicon';
import compression from 'compression';
import httpProxy from 'http-proxy';
import morgan from 'morgan';
import path from 'path';
import createStore from './redux/store/create';
import cors from 'cors';
import http from 'http';
import { match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import getRoutes from './routes/router';
import parser from 'body-parser';
import serialize from 'serialize-javascript';


// Express servers
const app = new Express();
const server = new http.Server(app);

// Middleware Functions
const shouldCompress = (req, res) => (req.headers['x-no-compression'] ? false : compression.filter(req, res));

const targetUrl = process.env.PROXIMO_URL;
const proxy = httpProxy.createProxyServer({
	target: targetUrl,
	ws: true,
});

// Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(Express.static(path.join(__dirname, '..', 'assets')));
app.use(favicon(path.join(__dirname, '..', 'assets','img','favicon.ico')));
app.use(cors({'Access-Control-Allow-Origin': '*'}));
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(compression({ filter: shouldCompress }));

// Proxy Api
app.use('/api', (req, res) => {
	proxy.web(req, res, { target: targetUrl });
});
app.use('/ws', (req, res) => {
	proxy.web(req, res, { target: `${targetUrl}/ws` });
});
proxy.on('error', (error, req, res) => {
	res.status(500).render('500');
});
server.on('upgrade', (req, socket, head) => {
	proxy.ws(req, socket, head);
});

// React
app.use((req, res) => {

	const memoryHistory = createHistory(req.originalUrl);
	const store = createStore(memoryHistory);
	const history = syncHistoryWithStore(memoryHistory, store);

	match({ history, routes: getRoutes(), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).render('500');
		} else if (redirectLocation) {
			res.redirect(redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			loadOnServer({ ...renderProps, store }).then(() => {
				const component = (
					<Provider store={store} key="provider">
						<ReduxAsyncConnect {...renderProps} />
					</Provider>
				);
				global.navigator = {userAgent: req.headers['user-agent']};
				res.status(200).render('index', {
					reactApp: ReactDOM.renderToStaticMarkup(component),
					redux: `${serialize(store.getState())}`,
				});
			})
				.catch(error => {
					console.error(`ERROR: `, error);
				});
		} else {
			res.status(404).render('404');
		}
	});
});

server.listen(process.env.PORT, (err) => {
	if (err) {
		console.error(err);
	}
});
