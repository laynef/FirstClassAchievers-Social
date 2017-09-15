import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducer from '../reducers/combine';


export default function createStore(history, data) {
	// Sync dispatched route actions to the history
	const reduxRouterMiddleware = routerMiddleware(history);
	const middleware = [reduxRouterMiddleware, thunk, ReduxPromise];
	let finalCreateStore = applyMiddleware(...middleware)(_createStore);
	const store = finalCreateStore(reducer, data);

	return store;
};
