import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth';
import { Card, CardSection, Input, Button, Spinner } from '../commons/index';

class AuthPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    submit() {
        const { dispatch } = this.props
        dispatch(login({
            email: this.state.email, 
            password: this.state.password
        }))
    }

    render() {
        return (
            <Card>
                <CardSection>
                <Input
                    label="Email"
                    placeholder="Enter email"
                    onChangeText={e => this.setState({email: e.target.value})}
                />
                </CardSection>

                <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="Enter password"
                    onChangeText={e => this.setState({password: e.target.value})}
                />
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.submit()}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

AuthPage = reduxForm({
    form: 'AuthPage'
})(AuthPage)

export default connect(state => ({
}))(AuthPage)