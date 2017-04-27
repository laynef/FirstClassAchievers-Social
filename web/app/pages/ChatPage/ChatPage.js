import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { getMessages, createMessage, inviteFriends } from '../../redux/actions/message'
import { getProfile } from '../../redux/actions/profile'
import { renderMessageInput } from '../../redux/utils/ReduxForms'
import io from 'socket.io-client'


class ChatPage extends Component {

    componentWillMount() {
        const { dispatch, params } = this.props
        dispatch(getProfile(Number(params.otherId)))
        dispatch(getMessages(Number(params.userId), Number(params.otherId)))
    }

    static formSubmit(data) {
        const { dispatch, params, reset, messages } = this.props
        this.favoriteOnInit()
        let socket = io()
        dispatch(createMessage({
            message: data.message,
            user_id: Number(params.userId),
            to: Number(params.otherId),
            roomNameId: `_${params.userId}-${params.otherId}_`
        }))
        socket.emit('message', {
            message: data.message,
            user_id: Number(params.userId),
            to: Number(params.otherId),
            roomNameId: `_${params.userId}-${params.otherId}_`
        })
        socket.on('message', msg => {
            messages.push(msg)
        })
        dispatch(reset('ChatPage'))
    }

    favoriteOnInit() {
        const { messages, dispatch, params } = this.props
        let showing = []
        if (!messages) {
           showing = localStorage[`to_${params.otherId}`] ? localStorage.getItem(`to_${params.otherId}`) : []
        } else {
            showing = messages
        }
        if (showing.length == 0) {
            dispatch(inviteFriends({ friend: Number(params.userId) }, Number(params.otherId)))
        }
    }

    renderConversion() {
        const { user, profile, messages } = this.props
        if (!messages) return null
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

     componentDidUpdate(nextProps, nextState) {
        const { params, messages } = this.props
        if (messages && nextProps.messages.length != messages.length) {
            dispatch(getMessages(Number(params.userId), Number(params.otherId)))
            this.renderConversion()
        }
        if (!messages) {
            this.renderConversion()
        }
    }

     componentWillUpdate(nextProps, nextState) {
        const { params, messages } = this.props
        if (messages && nextProps.messages.length != messages.length) {
            dispatch(getMessages(Number(params.userId), Number(params.otherId)))
            this.renderConversion()
        }
        if (!messages) {
            this.renderConversion()
        }
    }

    componentWillUnmount() {
        const { messages } = this.props
        if (messages) {
            localStorage.setItem(`to_${messages[0].to}`, JSON.stringify(messages))
        }
    }

    render() {
        const { messages, handleSubmit, profile, params } = this.props
        if (!profile || profile.id != params.otherId) return null
        if (!messages) return null
        return (
            <div id="ChatPage">
                {/* Fill me in */}
                <h1>Chat</h1>
                <div className="col-md-12 view chat-view bg-white clearfix innerChat">
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

export default connect((state, props) => {
 const message = state.messages.data
//  let array = null
//  if (!message) {
//     array = !message ? (!localStorage[`to_${props.routeParams.otherId}`] ? message :  JSON.parse(localStorage.getItem(`to_${props.routeParams.otherId}`))) : null
//  }
 return {
    messages: message,
    profile: state.profile.data,
    user: state.user.data
}})(ChatPage)