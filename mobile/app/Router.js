import React from 'react'
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux'
import { Text } from 'react-native'

// Pages
import MainPage  from './pages/MainPage'
import LoginPage  from './pages/LoginPage'
import SignUpPage  from './pages/SignUpPage'

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
          <Scene key="login" component={LoginPage} title="Please Login" renderRightButton={() => (
              <Text  onPress={() => Actions.signup({type: ActionConst.PUSH})}>
                Sign Up
              </Text>
          )} />
          <Scene key="signup" component={SignUpPage} title="Please Login" renderRightButton={() => (
              <Text onPress={() => Actions.login({type: ActionConst.BACK})}>
                Login
              </Text>
          )} />
        </Scene>

        <Scene key="home" component={MainPage} />
    </Router>
)

export default RouterComponent
