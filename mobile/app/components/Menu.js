import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux'


let pages = [
    "home",
    "testimonials",
    "profile",
    "favorites",
    "friends",
    "logout"
]

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Card>
                <CardSection onPress={() => Actions.home({type: ActionConst.PUSH})}>
                    <Text>HOME</Text>
                </CardSection>
                <CardSection onPress={() => Actions.testimonials({type: ActionConst.PUSH})}>
                    <Text>TESTIMONIALS</Text>
                </CardSection>
                <CardSection onPress={() => Actions.profile({type: ActionConst.PUSH})}>
                    <Text>PROFILE</Text>
                </CardSection>
                <CardSection onPress={() => Actions.favorites({type: ActionConst.PUSH})}>
                    <Text>FAVORITES</Text>
                </CardSection>
                <CardSection onPress={() => Actions.followers({type: ActionConst.PUSH})}>
                    <Text>FOLLOWERS</Text>
                </CardSection>
                <CardSection onPress={() => Actions.auth({type: ActionConst.PUSH})}>
                    <Text>LOGOUT</Text>
                </CardSection>
            </Card>
        )
    }
}

Menu = reduxForm({
    form: 'Menu'
})(Menu)

export default connect(state => ({
}))(Menu)