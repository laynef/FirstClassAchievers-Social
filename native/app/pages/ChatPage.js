import React, { Component } from 'react'
import { Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { getMessages, createMessage, inviteFriends } from '../redux/actions/message'
import { getProfile } from '../redux/actions/profile'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'
import io from 'socket.io-client'


const socket = io('https://first-class-achievers.herokuapp.com')

class ChatPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        const { dispatch, otherId, userId } = this.props
        dispatch(getProfile(Number(otherId)))
        dispatch(getMessages(Number(userId), Number(otherId)))
        socket.on('connect', () => {
            let data = {
                user: userId,
                room1: `_${userId}-${otherId}_`,
                room2: `_${otherId}-${userId}_`
            }
            socket.emit('enter', data)
        })
    }

    submit() {
        const { dispatch, messages, userId, otherId } = this.props
        this.favoriteOnInit()
        dispatch(createMessage({
            message: this.state.text,
            user_id: Number(userId),
            to: Number(otherId),
            roomNameId: `_${userId}-${otherId}_`
        }))
        socket.emit('updatechat', Number(userId), {
            message: this.state.text,
            user_id: Number(userId),
            to: Number(otherId),
            roomNameId: `_${userId}-${otherId}_`
        })
        this.setState({text: ''})
    }

    favoriteOnInit() {
        const { messages, dispatch, userId, otherId } = this.props
        if (messages.length == 0) {
            dispatch(inviteFriends({ friend: Number(userId) }, Number(otherId)))
        }
    }

    render() {
        const { messages, profile, userProfile } = this.props
        return (
            <ScrollView>
                {messages.map((e, i) => {
                    let usr = e.userId ? profile : userProfile;
                    return (
                        <Card key={i}>
                            <CardSection>
                                <Thumbnail image={usr.image} />
                                <Text>{usr.firstName + ' ' + usr.lastName}</Text>
                                <Text>Created By</Text>
                            </CardSection>
                            <CardSection>
                            <Text>{e.message}</Text>
                            </CardSection>
                        </Card>
                    )
                })}
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
            </ScrollView>
        )
    }
}

ChatPage = reduxForm({
    form: 'ChatPage'
})(ChatPage)

export default connect(state => ({
    messages: state.messages.data,
    user: state.user.data,
    userProfile: state.user.profile,
    profile: state.profile.data
}))(ChatPage)