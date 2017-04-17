import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class LoginModal extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="LoginModalComponent">
                {/* Fill me in */}
            </div>
        )
    }

}

LoginModal = reduxForm({
    form: 'LoginModalComponent'
})(LoginModal)

export default connect(state => ({
}))(LoginModal)
