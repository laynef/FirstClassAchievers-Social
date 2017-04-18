import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../../redux/utils/ReduxForms'
import { login } from '../../../redux/actions/auth.js'


class LoginModal extends Component {

    static formSubmit(data) {
        const { dispatch } = this.props
        dispatch(login(data))
    }

    render() {
        return (
            <div id="LoginModalComponent">
                <Form onSubmit={LoginModal.formSubmit.bind(this)}>
                    <Field component={renderInput} label="Email" type="email" name="email"/>
                    <Field component={renderInput} label="Password" type="password" name="password"/>
                </Form>
            </div>
        )
    }

}

LoginModal = reduxForm({
    form: 'LoginModalComponent'
})(LoginModal)

export default connect(state => ({
}))(LoginModal)
