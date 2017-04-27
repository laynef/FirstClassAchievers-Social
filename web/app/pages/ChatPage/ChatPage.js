import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { getMessages, createMessage } from '../../redux/actions/message'
import { getProfile } from '../../redux/actions/profile'
import { renderMessageInput } from '../../redux/utils/ReduxForms'
import io from 'socket.io-client'


class ChatPage extends Component {

    componentDidMount() {
        const { dispatch, params } = this.props
        dispatch(getProfile(params.otherId))
        dispatch(getMessages(params.userId, params.otherId))
    }

    static formSubmit(data) {
        const { dispatch, params, reset, messages } = this.props
        let socket = io()
        dispatch(createMessage({
            message: data.message,
            user_id: params.userId,
            to: params.otherId,
            roomNameId: `_${params.userId}-${params.otherId}_`
        }))
        socket.emit('message', {
            message: data.message,
            user_id: params.userId,
            to: params.otherId,
            roomNameId: `_${params.userId}-${params.otherId}_`
        })
        socket.on('message', msg => {
            messages.push(msg)
        })
        dispatch(reset('ChatPage'))
    }

    renderConversion() {
        const { messages, user, profile } = this.props
        return messages
            .map((e, i) => (
                <div key={i} className="message clearfix">
                    {user.id == e.user_id ? null :  (
                        <div className="profile-img-wrapper m-t-5 inline">
                                <img className="col-top" 
                                    width="30" height="30" 
                                    src={user.id == e.user_id ? null : (profile.image || 'http://i.imgur.com/sRbuHxN.png')} 
                                    data-src={user.id == e.user_id ? null : (profile.image || 'http://i.imgur.com/sRbuHxN.png')} 
                                    data-src-retina={user.id == e.user_id ? null : (profile.image || 'http://i.imgur.com/sRbuHxN.png')}/>
                        </div>
                        )}
                    <div className={`chat-bubble from-${user.id == e.user_id ? 'me' : 'them'}`}>
                        {e.message}
                    </div>
                </div>
                )
            )
    }

     componentDidUpdate() {
        this.renderConversion()
    }

    render() {
        const { messages, handleSubmit, profile } = this.props
        if (!messages || !profile) return null
        return (
            <div id="ChatPage">
                {/* Fill me in */}
                <h1>Chat</h1>
                <div className="col-md-12 view chat-view bg-white clearfix" style={{height: '65vw'}}>
                    <Form onSubmit={handleSubmit(ChatPage.formSubmit.bind(this))}>
                        <div className="chat-inner" id="my-conversation">
                            {this.renderConversion()}
                        </div>
                        <div className="b-t b-grey bg-white clearfix p-l-10 p-r-10">
                            <div className="row">
                                <Field component={renderMessageInput} name="message" />
                                <button type="submit" className="btn btn-complete btn-block m-t-5">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }

}

ChatPage = reduxForm({
    form: 'ChatPage'
})(ChatPage)

export default connect(state => ({
    messages: state.messages.data,
    profile: state.profile.data,
    user: state.user.data
}))(ChatPage)