import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { register } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'


class SignUpPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            repassword: ''
        }
    }

    submit() {
        const { dispatch } = this.props
        if (this.state.password == this.state.repassword) {
            dispatch(register({
                email: this.state.email, 
                password: this.state.password
            }))
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                <Input
                    label="Email"
                    placeholder="Enter email"
                    onChangeText={email => this.setState({email})}
                />
                </CardSection>

                <CardSection>
                <Input
                    secureTextEntry
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
                        Sign Up
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

SignUpPage = reduxForm({
    form: 'SignUpPage'
})(SignUpPage)

export default connect(state => ({
}))(SignUpPage)