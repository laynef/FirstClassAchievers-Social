import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'


class LoginPage extends Component {

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
                    <Button onPress={() => this.submit()}>
                        Login
                    </Button>
                </CardSection>

                  <Image 
                        style={{
                            alignSelf: 'center',
                            height: 150,
                            width: 150,
                            borderWidth: 1,
                            borderRadius: 75
                        }}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} 
                        resizeMode="cover"
                    />
            </Card>
        )
    }
}

LoginPage = reduxForm({
    form: 'LoginPage'
})(LoginPage)

export default connect(state => ({
}))(LoginPage)