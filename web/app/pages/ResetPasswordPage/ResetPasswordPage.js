import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class ResetPasswordPage extends Component {

    render() {
        return (
            <div id="ResetPasswordPage">
                <h1>Reset Password</h1>
            </div>
        )
    }

}

ResetPasswordPage = reduxForm({
    form: 'ResetPasswordPage'
})(ResetPasswordPage)

export default connect(state => ({
}))(ResetPasswordPage)