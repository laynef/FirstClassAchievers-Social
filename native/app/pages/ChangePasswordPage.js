import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { changePassword } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'


class ChangePasswordPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            repassword: ''
        }
    }

    submit() {
        const { dispatch } = this.props
        if (this.state.repassword == this.state.password) {
            dispatch(changePassword({
                password: this.state.password
            }))
            Actions.profile({type: ActionConst.BACK})
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                <Input
                    label="Password"
                    placeholder="Enter password"
                    onChangeText={password => this.setState({password})}
                />
                </CardSection>

                <CardSection>
                <Input
                    secureTextEntry
                    label="Confirm Password"
                    placeholder="Confirm password"
                    onChangeText={repassword => this.setState({repassword})}
                />
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.submit()}>
                        Change Password
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

ChangePasswordPage = reduxForm({
    form: 'ChangePasswordPage'
})(ChangePasswordPage)

export default connect(state => ({
}))(ChangePasswordPage)