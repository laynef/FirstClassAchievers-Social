import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import LoginModal from '../Header/LoginModal'
import SignUpModal from '../Header/SignUpModal'
import { Link } from 'react-router'


class MobileMenu extends Component {

    render() {
        const { user } = this.props
        return (
            <div id="MobileMenu">
                <nav id="sideMenu" className="page-sidebar visible" data-pages="sidebar" style={{zIndex: '100', width: '100vw'}}>
                    <div className="sidebar-header">
                        <img src="//theme/assets/img/logo_white.png" alt="logo" className="brand" data-src="//theme/assets/img/logo_white.png" data-src-retina="theme/assets/img/logo_white_2x.png" width="93" height="25"/>
                        <div className="sidebar-header-controls">
                        <button data-toggle-pin="sidebar" className="btn btn-link visible-xs-inline visible-sm-inline" type="button">
                            <i className="fa fs-12"></i>
                        </button>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                    {(!user || !user.id) ? (
                        <ul className="menu-items">
                            <li className="m-t-30" data-toggle="modal" data-target="#login-modal">
                                <span className="icon-thumbnail "><i className="pg-home"></i></span>
                                <Link to="/" className="detailed">
                                    <span className="title">Login</span>
                                </Link>
                            </li>
                            <li className="m-t-30"  data-toggle="modal" data-target="#sign-up-modal">
                                <span className="icon-thumbnail "><i className="pg-home"></i></span>
                                <Link to="/" className="detailed">
                                    <span className="title">Sign Up</span>
                                </Link>
                            </li>
                        <li className="m-t-30">
                            <span className="icon-thumbnail "><i className="pg-home"></i></span>
                            <Link to="/" className="detailed">
                            <span className="title">Home</span>
                            </Link>
                        </li>
                        <li className="m-t-30">
                            <Link to="/testimonials">
                            <span className="title">Testimonials</span>
                            </Link>
                            <span className="icon-thumbnail "><i className="pg-social"></i></span>
                        </li>
                        </ul>
                        ) : (
                        <ul className="menu-items">
                            <li className="m-t-30">
                                <span className="icon-thumbnail "><i className="pg-home"></i></span>
                                <Link to="/" className="detailed">
                                <span className="title">Home</span>
                                </Link>
                            </li>
                            <li className="m-t-30">
                                <span className="icon-thumbnail "><i className="pg-home"></i></span>
                                <Link to="/favorites" className="detailed">
                                <span className="title">Favorites</span>
                                </Link>
                            </li>
                            <li className="m-t-30">
                                <Link to="/friends">
                                <span className="title">Friends</span>
                                </Link>
                                <span className="icon-thumbnail "><i className="pg-social"></i></span>
                            </li>
                            <li className="m-t-30">
                                <Link to="/testimonials">
                                <span className="title">Testimonials</span>
                                </Link>
                                <span className="icon-thumbnail "><i className="pg-social"></i></span>
                            </li>
                            <li className="m-t-30">
                                <Link to="/">
                                <span className="title">Logout</span>
                                </Link>
                                <span className="icon-thumbnail "><i className="pg-social"></i></span>
                            </li>
                        </ul>
                        )}
                        <div className="clearfix"></div>
                    </div>
                    </nav>
                <LoginModal />
                <SignUpModal />
            </div>
        )
    }

}

MobileMenu = reduxForm({
    form: 'MobileMenu'
})(MobileMenu)

export default connect(state => ({
    user: state.user.data
}))(MobileMenu)
