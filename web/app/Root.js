import 'babel-polyfill'
import './sass/index'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ReduxPromise from 'redux-promise'
import reducers from './redux/store/combineReducers'
import routes from './Router'


const logger = createLogger()
const store = createStore(
    reducers,
    applyMiddleware(
        reduxThunk, 
        ReduxPromise,
        logger
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>, 
    document.getElementById('app')
)
