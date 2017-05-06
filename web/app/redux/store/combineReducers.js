import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// reducers
import userReducer from '../reducers/auth'
import profileReducer from '../reducers/profile'
import testimonialReducer from '../reducers/testimonial'
import followingReducer from '../reducers/following'
import favoritesReducer from '../reducers/favorite'
import friendsReducer from '../reducers/friends'
import messagesReducer from '../reducers/message'
import notifyReducer from '../reducers/notifications'


const reducers = combineReducers({
    form: formReducer,
    user: userReducer,
    profile: profileReducer,
    testimonial: testimonialReducer,
    following: followingReducer,
    favorites: favoritesReducer,
    friends: friendsReducer,
    messages: messagesReducer,
    notifications: notifyReducer
})

export default reducers
