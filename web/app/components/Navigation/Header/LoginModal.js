import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../../redux/utils/ReduxForms'
import { login } from '../../../redux/actions/auth'


class LoginModal extends Component {

    formSubmit(data) {
        const { dispatch } = this.props
        dispatch(login(data))
    }

    render() {
        return (
            <div id="LoginModalComponent">
                <div className="modal fade slide-up disable-scroll in" id="login-modal" tabIndex="-1" role="dialog" aria-hidden="false" style={{display: 'block', paddingLeft: '0px'}}>
                    <div className="modal-dialog">
                        <div className="modal-content-wrapper">
                            <div className="modal-content">
                                <div className="modal-header clearfix text-left">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="pg-close fs-14"></i></button>
                                    <h5><span className="semi-bold">Login</span></h5>
                                    <p className="p-b-10">Login to connect with other liked minds</p>
                                    <div className="modal-body">
                                        <Form onSubmit={this.formSubmit.bind(this)}>
                                            <Field component={renderInput} label="Email" type="email" name="email"/>
                                            <Field component={renderInput} label="Password" type="password" name="password"/>
                                        </Form>
                                        <div className="row">
                                            <div className="col-sm-4 m-t-10 sm-m-t-10">
                                                <button type="submit" className="btn btn-primary btn-block m-t-5">Login</button>
                                            </div>
                                        </div>
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

LoginModal = reduxForm({
    form: 'Login Modal'
})(LoginModal)

export default connect(state => ({
}))(LoginModal)
