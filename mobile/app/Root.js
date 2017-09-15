import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/store/combineReducers'
import { Provider } from 'react-redux'
import {Scene, Router} from 'react-native-router-flux'
import RouterComponent from './Router'
import reduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'


export default class native extends Component {
  render() {
    const store = createStore(reducers, 
        applyMiddleware(reduxThunk, ReduxPromise)
    )
    return (
        <Provider store={store}>
            <RouterComponent />
        </Provider>
    )
  }
}