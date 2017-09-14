import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { reducer as form } from 'redux-form';
import userReducer from './auth';
import profileReducer from './profile';
import testimonialReducer from './testimonial';
import followingReducer from './following';
import favoritesReducer from './favorite';
import friendsReducer from './friends';
import messagesReducer from './message';
import commentReducer from './comment';
import notifyReducer from './notifications';


export default combineReducers({
	reduxAsyncConnect,
	routing: routerReducer,
	form,
	user: userReducer,
	profile: profileReducer,
	testimonial: testimonialReducer,
	following: followingReducer,
	favorites: favoritesReducer,
	friends: friendsReducer,
	messages: messagesReducer,
	notifications: notifyReducer,
	comments: commentReducer,
});
