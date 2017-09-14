/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/store/create';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import './styles/index';
import getRoutes from './routes/router';

const dest = document.getElementById('app');
const store = createStore(browserHistory, window.__data);
const history = syncHistoryWithStore(browserHistory, store);

const component = (
	<Router
		render={props => <ReduxAsyncConnect {...props} />}
		history={history}
	>
		{getRoutes(store)}
	</Router>
);

ReactDOM.render(
	<Provider store={store} key="provider">
		{component}
	</Provider>,
	dest
);

if (global.__DEVELOPMENT__) {
	window.React = React; // enable debugger
}
