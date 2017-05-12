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
                {pages.map(e => (
                    <CardSection>
                        <Text onPress={() => Actions[e]({type: ActionConst.PUSH})}>{e}</Text>
                    </CardSection>
                ))}
            </Card>
        )
    }
}

Menu = reduxForm({
    form: 'Menu'
})(Menu)

export default connect(state => ({
}))(Menu)