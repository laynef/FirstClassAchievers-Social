import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Pages
import {
	// LEAVE HERE Auto Terminal Setup Pages
	MasterPage,
	MainPage,
	NotFoundPage,
} from '../pages/containers';


export default store => {
	const requireLogin = (nextState, replace, cb) => {
		function checkAuth() {
			const { user } = store.getState();
			if (!user.data) {
				replace('/');
			}
			cb();
		}
		checkAuth();
	};
	return (
		<Route path="/" component={MasterPage}>
			<IndexRoute component={MainPage} />

			{/* LEAVE HERE Auto Terminal Setup Route */}

			<Route onEnter={requireLogin}>
				{/* LEAVE HERE Auto Terminal Setup Auth Route */}
			</Route>

			<Route path="*" component={NotFoundPage} />
		</Route>
	);
};
