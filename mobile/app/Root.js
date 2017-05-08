/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { createStore } from 'redux'
import reducers from './redux/store/combineReducers'
import { Provider } from 'react-redux'
// import {Scene, Router} from 'react-native-router-flux'
// import {scenes} from './Router'

export default class mobile extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Shake or press menu button for dev menu
                </Text>
            </View>
        </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
