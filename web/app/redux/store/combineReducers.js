import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// reducers
import userReducer from '../reducers/auth'
import profileReducer from '../reducers/profile'
import testimonialReducer from '../reducers/testimonial'
import followingReducer from '../reducers/following'
import favoritesReducer from '../reducers/favorite'
import friendsReducer from '../reducers/friends'


const reducers = combineReducers({
    form: formReducer,
    user: userReducer,
    profile: profileReducer,
    testimonial: testimonialReducer,
    following: followingReducer,
    favorites: favoritesReducer,
    friends: friendsReducer
})

export default reducers
