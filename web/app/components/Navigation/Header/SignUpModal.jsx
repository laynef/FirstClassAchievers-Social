import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../../redux/utils/ReduxForms'
import { register } from '../../../redux/actions/auth.js'


class SignUpModal extends Component {

    static formSubmit(data) {
        const { dispatch } = this.props
        if (data.email && data.password === data.repassword) {
            return dispatch(register(data))
        }
        this.renderError()
    }

    renderError() {

    }

    render() {
        return (
            <div id="SignUpModalComponent">
                <div className="modal fade slide-up disable-scroll in" id="register-modal" tabindex="-1" role="dialog" aria-hidden="false" style={{display: 'block', paddingLeft: '0px'}}>
                    <div className="modal-dialog">
                      <div className="modal-content-wrapper">
                        <div className="modal-content">
                          <div className="modal-header clearfix text-left">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="pg-close fs-14"></i></button>
                            <h5><span className="semi-bold">Sign up</span></h5>
                            <p className="p-b-10">Sign up to connect with other liked minds</p>
                            <div className="modal-body">
                                <Form onSubmit={SignUpModal.formSubmit.bind(this)}>
                                    <Field component={renderInput} label="Email" type="email" name="email"/>
                                    <Field component={renderInput} label="Password" type="password" name="password"/>
                                    <Field component={renderInput} label="Confirm Password" type="password" name="repassword"/>
                                </Form>
                                <div className="row">
                                    <div className="col-sm-4 m-t-10 sm-m-t-10">
                                        <button type="button" className="btn btn-primary btn-block m-t-5">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

SignUpModal = reduxForm({
    form: 'SignUpModalComponent'
})(SignUpModal)

export default connect(state => ({
}))(SignUpModal)
