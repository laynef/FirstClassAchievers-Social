import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import LoginModal from './LoginModal'


class TopBar extends Component {

    render() {
        const { children } = this.props;
        return (
        <div id="TopBar">
            <div className="topBar">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-sm-7 col-xs-12 pull-right">
                    <ul className="list-inline pull-right top-right">
                    <li className="account-login">
                        <span>
                            <a data-toggle="modal" href=".login-modal">Log in</a>
                            <small>or</small>
                            <a data-toggle="modal" href="#signup">Create an account</a>
                        </span>
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
            <LoginModal />
        </div>
        )
    }
}

TopBar = reduxForm({
    form: 'TopBar'
})(TopBar)

export default connect(state => ({
}))(TopBar)