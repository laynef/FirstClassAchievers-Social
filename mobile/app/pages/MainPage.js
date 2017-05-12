import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'

export default class MainPage extends Component {
  render() {
    return (
      <View>
          <Text>
            Welcome to React Native!
          </Text>
          <Text>
            To get started, edit index.android.js
          </Text>
          <Text>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
      </View>
    )
  }
}
