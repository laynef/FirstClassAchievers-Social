import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { getMessages, createMessage } from '../../redux/actions/message'
import { getProfile } from '../../redux/actions/profile'
import { renderMessageInput } from '../../redux/utils/ReduxForms'


class ChatPage extends Component {

    componentDidMount() {
        const { dispatch, params } = this.props
        dispatch(getProfile(params.otherId))
        dispatch(getMessages(params.userId, params.otherId))
    }

    static formSubmit(data) {
        const { dispatch, params } = this.props
        dispatch(createMessage({
            message: data.message,
            user_id: params.userId,
            to: params.otherId,
            roomNameId: `_${params.userId}-${params.otherId}_`
        }))
    }

    renderChatFromMe(message, image, who) {
        return (
            <div className="message clearfix">
                <div className="profile-img-wrapper m-t-5 inline">
                    <img className="col-top" 
                        width="30" height="30" 
                        src={image || 'http://i.imgur.com/sRbuHxN.png'} 
                        alt="" 
                        data-src={image || 'http://i.imgur.com/sRbuHxN.png'} 
                        data-src-retina={image || 'http://i.imgur.com/sRbuHxN.png'}/>
                </div>
                <div className={`chat-bubble from-${who}`}>
                    {message}
                </div>
            </div>
        )
    }

    renderConversion() {
        const { messages, user, profile } = this.props
        return messages.map(e => this.renderChatFromMe(
            e.message, 
            user.id == e.user_id ? user.image : profile.image,
            user.id == e.user_id ? `me` : `them`
            )
        )
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