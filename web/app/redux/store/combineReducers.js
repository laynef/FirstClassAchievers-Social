import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// reducers
import userReducer from '../reducers/auth'
import profileReducer from '../reducers/profile'
import testimonialReducer from '../reducers/testimonial'
import followingReducer from '../reducers/following'


const reducers = combineReducers({
    form: formReducer,
    user: userReducer,
    profile: profileReducer,
    testimonial: testimonialReducer,
    following: followingReducer
})

export default reducers
