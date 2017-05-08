import React from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux'

// Pages
import MainPage  from './pages/MainPage'
import AuthPage  from './pages/AuthPage'

const RouterComponent = () => (
    <Router>
        <Scene key="auth">
          <Scene key="login" component={AuthPage} title="Please Login" />
        </Scene>

        <Scene key="home" component={MainPage} />
    </Router>
)

export default RouterComponent
