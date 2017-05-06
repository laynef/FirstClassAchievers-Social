import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../redux/store/forms'


class SignUpModal extends Component {

    static formSubmit(data) {
        const { dispatch } = this.props
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div id="SignUpModal">
                <div className="modal fade login-modal in" id="login" tabindex="-1" role="dialog" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h3 className="modal-title">log in</h3>
                            </div>
                            <div className="modal-body">
                                <Form role="form" onSubmit={handleSubmit(SignUpModal.formSubmit.bind(this))}> 
                                    <Field component={renderInput} type="email" label="Email" placeholder="Enter email" name="email"/>
                                    <Field component={renderInput} type="password" label="Password" placeholder="Enter password" name="password"/>
                                    <Field component={renderInput} type="password" label="Confirm Password" placeholder="Confirm password" name="rePassword"/>
                                    <button type="submit" className="btn btn-primary btn-block">sign up</button>
                                </Form>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignUpModal = reduxForm({
    form: 'SignUpModal'
})(SignUpModal)

export default connect(state => ({
}))(SignUpModal)