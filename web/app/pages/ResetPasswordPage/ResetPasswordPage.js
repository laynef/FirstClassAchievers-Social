import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { changeForgottenPassword, getUserEmail } from '../../redux/actions/auth'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../redux/utils/ReduxForms'


class ResetPasswordPage extends Component {

    static formSubmit(data) {
        const { dispatch, params } = this.props
        if (data.repassword == data.password) {
            dispatch(changeForgottenPassword(data, params.userId))
            browserHistory.push('/')
        }
    }

    componentDidMount() {
        const { dispatch, params } = this.props 
        dispatch(getUserEmail(params.userId))
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div id="ResetPasswordPage">
                <h1>Reset Password</h1>
                <Form onSubmit={handleSubmit(ResetPasswordPage.formSubmit.bind(this))}>
                    <Field component={renderInput} label="Password" type="password" name="password"/>
                    <Field component={renderInput} label="Confirm Password" type="password" name="repassword"/>
                    <div className="row">
                        <div className="col-sm-12 m-t-10 sm-m-t-10">
                            <button type="submit" className="btn btn-primary btn-block m-t-5">Change Password</button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }

}

ResetPasswordPage = reduxForm({
    form: 'ResetPasswordPage'
})(ResetPasswordPage)

export default connect(state => ({
}))(ResetPasswordPage)