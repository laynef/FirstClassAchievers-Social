import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Pages
import {
	MasterPage,
	MainPage,
	NotFoundPage,
	TestimonialPage,
	DetailEntry,
	AboutUsPage,
	FavoritesPage,
	ProfilePage,
	DetailPage,
	ChatPage,
	FriendsPage,
	ResetPasswordPage,
} from '../pages/containers';


export default () => {
	return (
		<Route path="/" component={MasterPage}>
			<IndexRoute component={MainPage} />
			<Route path="testimonials" component={TestimonialPage} />
			<Route path="testimonials/:entryId" component={DetailEntry} />
			<Route path="about" component={AboutUsPage} />
			<Route path="profile" component={ProfilePage} />
			<Route path="favorites" component={FavoritesPage} />
			<Route path="profile/:userId" component={DetailPage} />
			<Route path="chat/:userId/:otherId" component={ChatPage} />
			<Route path="friends" component={FriendsPage} />
			<Route path="reset/:userId" component={ResetPasswordPage} />
			<Route path="*" component={NotFoundPage} />
		</Route>
	);
};
