import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../redux/store/forms'
import { login, register, logout } from '../../redux/actions/auth'


class TopBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            signUp: false,
            login: false,
            forgotten: false
        }
    }

    static formLoginSubmit(data) {
        const { dispatch, reset } = this.props
        dispatch(login(data))
        this.setState({login: false})
    }

    static formSignUpSubmit(data) {
        const { dispatch, reset } = this.props
        if (data.rePassword == data.password) {
            dispatch(register(data))
        }
        this.setState({signUp: false})
    }

    render() {
        const { handleSubmit, dispatch, user } = this.props;
        return (
        <div id="TopBar">
            <div className="topBar">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-sm-7 col-xs-12 pull-right">
                    <ul className="list-inline pull-right top-right">
                    <li className="account-login">
                    {user && user.id ? (
                        <span>
                            <a onClick={() => dispatch(logout())} data-toggle="modal" href=".login-modal">Logout</a>
                        </span>
                    ) : (
                        <span>
                            <a onClick={() => this.setState({login: true})} data-toggle="modal" href=".login-modal">Log in</a>
                            <small>or</small>
                            <a onClick={() => this.setState({signUp: true})} data-toggle="modal" href="#signup">Create an account</a>
                        </span>
                    )}
                    </li>
                    <li className="searchBox">
                        <a href="#"><i className="fa fa-search"></i></a>
                        <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                            <span className="input-group">
                            <input type="text" className="form-control" placeholder="Search…" aria-describedby="basic-addon2"/>
                            <button type="submit" className="input-group-addon">Submit</button>
                            </span>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown cart-dropdown">
                        <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i>$0</a>
                        <ul className="dropdown-menu dropdown-menu-right">
                        <li>Item(s) in your cart</li>
                        <li>
                            <a href="single-product.html">
                            <div className="media">
                                <img className="media-left media-object" src="theme/img/home/cart-items/cart-item-01.jpg" alt="cart-Image"/>
                                <div className="media-body">
                                <h5 className="media-heading">INCIDIDUNT UT <br/><span>2 X $199</span></h5>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="single-product.html">
                            <div className="media">
                                <img className="media-left media-object" src="theme/img/home/cart-items/cart-item-01.jpg" alt="cart-Image"/>
                                <div className="media-body">
                                <h5 className="media-heading">INCIDIDUNT UT <br/><span>2 X $199</span></h5>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <div className="btn-group" role="group" aria-label="...">
                            <button type="button" className="btn btn-default" onclick="location.href='cart-page.html';">Shopping Cart</button>
                            <button type="button" className="btn btn-default" onclick="location.href='checkout-step-1.html';">Checkout</button>
                            </div>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </div>
            </div>    
            </div>
                {this.state.login ? (
                    <div id="LoginModal">
                        <div className="modal fade login-modal in" id="login" tabindex="-1" role="dialog" style={{display: 'block'}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" onClick={() => this.setState({login: false})} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h3 className="modal-title">log in</h3>
                                    </div>
                                    <div className="modal-body">
                                        <Form role="form" onSubmit={handleSubmit(TopBar.formLoginSubmit.bind(this))}> 
                                            <Field component={renderInput} type="email" label="Email" placeholder="Enter email" name="email"/>
                                            {this.state.forgotten ? (
                                                <div>
                                                    <button type="submit" className="btn btn-primary btn-block">reset password</button>
                                                    <button onClick={() => this.setState({forgotten: false})} type="button" className="btn btn-link btn-block">I remember my password</button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <Field component={renderInput} type="password" label="Password" placeholder="Enter password" name="password"/>
                                                    <button type="submit" className="btn btn-primary btn-block">log in</button>
                                                    <button onClick={() => this.setState({forgotten: true})} type="button" className="btn btn-link btn-block">Forgot Password?</button>
                                                </div>
                                            )}
                                        </Form>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ): null}
                {this.state.signUp ? (
                    <div id="SignUpModal">
                        <div className="modal fade in" id="signup" tabindex="-1" role="dialog" style={{display: 'block'}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" onClick={() => this.setState({signUp: false})} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h3 className="modal-title">create an account</h3>
                                    </div>
                                    <div className="modal-body">
                                        <Form role="form" onSubmit={handleSubmit(TopBar.formSignUpSubmit.bind(this))}> 
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
                ): null}
        </div>
        )
    }
}

TopBar = reduxForm({
    form: 'TopBar'
})(TopBar)

export default connect(state => ({
    user: state.user.data
}))(TopBar)