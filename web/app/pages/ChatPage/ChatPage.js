import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class ChatPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="ChatPage">
                {/* Fill me in */}
                <h1>Chat</h1>
            </div>
        )
    }

}

ChatPage = reduxForm({
    form: 'ChatPage'
})(ChatPage)

export default connect(state => ({
}))(ChatPage)