import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// reducers
import userReducer from '../reducers/auth'
import profileReducer from '../reducers/profile'
import testimonialReducer from '../reducers/testimonial'
import followingReducer from '../reducers/following'
import favoritesReducer from '../reducers/favorite'


const reducers = combineReducers({
    form: formReducer,
    user: userReducer,
    profile: profileReducer,
    testimonial: testimonialReducer,
    following: followingReducer,
    favorites: favoritesReducer
})

export default reducers
