import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// reducers
import userReducer from '../reducers/auth'


const reducers = combineReducers({
    form: formReducer,
    user: userReducer,
    profile: profileReducer
})

export default reducers
