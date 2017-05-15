import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'


class ChatPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    submit() {
        
    }

    render() {
        return (
            <Card>
                <CardSection>

                </CardSection>

                <CardSection>
                <Input
                    placeholder="Enter a message"
                    onChangeText={text => this.setState({text})}
                />
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.submit()}>
                        Submit
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

ChatPage = reduxForm({
    form: 'ChatPage'
})(ChatPage)

export default connect(state => ({
}))(ChatPage)