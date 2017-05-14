import React from 'react'
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux'
import { Text } from 'react-native'

// Pages
import MainPage  from './pages/MainPage'
import LoginPage  from './pages/LoginPage'
import SignUpPage  from './pages/SignUpPage'
import TestimonialsPage  from './pages/TestimonialsPage'
import FavoritesPage  from './pages/FavoritesPage'
import ProfilePage  from './pages/ProfilePage'
import FollowersPage  from './pages/FollowersPage'

// Components
import Menu from './components/Menu'
import ChatList from './components/ChatList'


const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>
        {/* First Step Auth */}
        <Scene key="auth">
          <Scene key="login" component={LoginPage} 
                title="Login" renderRightButton={() => (
              <Text  onPress={() => Actions.signup({type: ActionConst.PUSH})}>
                Sign Up
              </Text>
          )} />
          <Scene key="signup" component={SignUpPage} 
                title="Sign Up" renderRightButton={() => (
              <Text onPress={() => Actions.login({type: ActionConst.BACK})}>
                Login
              </Text>
          )} />
        </Scene>

        <Scene key="home"
            component={MainPage}
            title="News Feed"
            renderLeftButton={() => (
                <Text onPress={() => Actions.menu({type: ActionConst.PUSH})}>
                    Menu
                </Text>
                )}
            renderRightButton={() => (
                <Text onPress={() => Actions.chatList({type: ActionConst.PUSH})}>
                    Chat
                </Text>
                )}>
        </Scene>

        <Scene key="menu" component={Menu} title="Menu"/>
        <Scene key="chatList" component={ChatList} title="Chat List"/>

        <Scene key="testimonials"
            component={MainPage}
            title="Posts"
            renderLeftButton={() => (
                <Text onPress={() => Actions.menu({type: ActionConst.PUSH})}>
                    Menu
                </Text>
                )}
            renderRightButton={() => (
                <Text onPress={() => Actions.chatList({type: ActionConst.PUSH})}>
                    Chat
                </Text>
                )}>
        </Scene>

        <Scene key="favorites"
            component={FavoritesPage}
            title="Favorites"
            renderLeftButton={() => (
                <Text onPress={() => Actions.menu({type: ActionConst.PUSH})}>
                    Menu
                </Text>
                )}
            renderRightButton={() => (
                <Text onPress={() => Actions.chatList({type: ActionConst.PUSH})}>
                    Chat
                </Text>
                )}>
        </Scene>

        <Scene key="profile"
            component={ProfilePage}
            title="My Profile"
            renderLeftButton={() => (
                <Text onPress={() => Actions.menu({type: ActionConst.PUSH})}>
                    Menu
                </Text>
                )}
            renderRightButton={() => (
                <Text onPress={() => Actions.chatList({type: ActionConst.PUSH})}>
                    Chat
                </Text>
                )}>
        </Scene>

        <Scene key="followers"
            component={FollowersPage}
            title="Following"
            renderLeftButton={() => (
                <Text onPress={() => Actions.menu({type: ActionConst.PUSH})}>
                    Menu
                </Text>
                )}
            renderRightButton={() => (
                <Text onPress={() => Actions.chatList({type: ActionConst.PUSH})}>
                    Chat
                </Text>
                )}>
        </Scene>

    </Router>
)

export default RouterComponent
