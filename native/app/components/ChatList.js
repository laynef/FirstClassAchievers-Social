import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux'


class ChatList extends Component {

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

            </Card>
        )
    }
}

ChatList = reduxForm({
    form: 'ChatList'
})(ChatList)

export default connect(state => ({
}))(ChatList)