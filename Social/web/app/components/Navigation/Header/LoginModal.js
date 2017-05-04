import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../../redux/utils/ReduxForms'
import { login, forgottenPassword } from '../../../redux/actions/auth'
import { validate } from '../../../redux/validators/login'
import { Link } from 'react-router'


class LoginModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            forgot: false
        }
    }

    static formSubmitLogin(data) {
        const { dispatch, reset } = this.props
        dispatch(login(data))
        $('#login-modal').modal('hide')
        dispatch(reset('LoginModal'))
    }

    static formSubmitForgotten(data) {
        const { dispatch, reset } = this.props
        dispatch(forgottenPassword(data))
        $('#login-modal').modal('hide')
        dispatch(reset('LoginModal'))
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div id="LoginModalComponent">
                <div className="modal fade slide-up disable-scroll in" id="login-modal">
                    <div className="modal-dialog">
                        <div className="modal-content-wrapper">
                            <div className="modal-content">
                                <div className="modal-header clearfix text-left">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                        <i className="pg-close fs-14"></i>
                                    </button>
                                    <h5><span className="semi-bold">Login</span></h5>
                                    <p className="p-b-10">Login to connect with other liked minds</p>
                                    <div className="modal-body">
                                        {this.state.forgot ? (
                                            <Form onSubmit={handleSubmit(LoginModal.formSubmitForgotten.bind(this))}>
                                                <Field component={renderInput} label="Email" type="email" name="email"/>
                                                <p onClick={() => this.setState({forgot: false})}>I remember my password</p>
                                                <div className="row">
                                                    <div className="col-sm-4 m-t-10 sm-m-t-10">
                                                        <button type="submit" className="btn btn-primary btn-block m-t-5">Get Password</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        ) : (
                                                <Form onSubmit={handleSubmit(LoginModal.formSubmitLogin.bind(this))}>
                                                    <Field component={renderInput} label="Email" type="email" name="email"/>
                                                    <Field component={renderInput} label="Password" type="password" name="password"/>
                                                    <p onClick={() => this.setState({forgot: true})}>Forgot your password?</p>
                                                    <div className="row">
                                                        <div className="col-sm-12 m-t-10 sm-m-t-10">
                                                            <button type="submit" className="btn btn-primary btn-block m-t-5">Login</button>
                                                            <button className="btn btn-complete btn-block m-t-5">
                                                                <i className="fa fa-facebook"><a style={{color: 'white'}} href="/auth/facebook">Login with Facebook</a></i>
                                                            </button>
                                                            <button className="btn btn-danger btn-block m-t-5">
                                                                <i className="fa fa-google-plus"><a style={{color: 'white'}} href="/auth/google">Sign In with Google</a></i>
                                                            </button>
                                                            <button className="btn btn-info btn-block m-t-5">
                                                                <i className="fa fa-twitter"><a style={{color: 'white'}} href="/auth/twitter">Sign in with Twitter</a></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )}
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
    form: 'LoginModal'
})(LoginModal)

export default connect(state => ({
}))(LoginModal)
