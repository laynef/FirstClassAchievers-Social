import React from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux'

// Pages
import MainPage  from './pages/MainPage'

const RouterComponent = () => (
    <Router>
        <Scene key="home" component={MainPage} />
    </Router>
)

export default RouterComponent
