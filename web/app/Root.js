import 'babel-polyfill'
import './sass/index'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
<<<<<<< HEAD
// import { createLogger } from 'redux-logger'
=======
import { createLogger } from 'redux-logger'
>>>>>>> feat
import ReduxPromise from 'redux-promise'
import reducers from './redux/store/combineReducers'
import routes from './Router'


const logger = createLogger()
const store = createStore(
    reducers,
    applyMiddleware(
        reduxThunk, 
<<<<<<< HEAD
        ReduxPromise
    //     logger
=======
        ReduxPromise, 
        logger
>>>>>>> feat
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, 
    document.getElementById('app')
)
