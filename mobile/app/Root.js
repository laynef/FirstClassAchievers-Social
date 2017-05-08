import React, { Component } from 'react'
import { createStore } from 'redux'
import reducers from './redux/store/combineReducers'
import { Provider } from 'react-redux'
import {Scene, Router} from 'react-native-router-flux'
import RouterComponent from './Router'

export default class mobile extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <RouterComponent />
        </Provider>
    )
  }
}