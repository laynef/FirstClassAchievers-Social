import React from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux'
import { Text } from 'react-native'

// Pages
import MainPage  from './pages/MainPage'
import AuthPage  from './pages/AuthPage'

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
          <Scene key="login" component={AuthPage} title="Please Login" renderRightButton={() => (
              <Text onPress={Actions.jump()}>
                Sign Up
              </Text>
          )} />
        </Scene>

        <Scene key="home" component={MainPage} />
    </Router>
)

export default RouterComponent
