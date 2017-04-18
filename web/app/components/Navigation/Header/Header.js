import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { logout } from '../../../redux/actions/auth'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'


class Header extends Component {

    render() {
        const { dispatch, user } = this.props
        return (
                <div id="HeaderComponent">
                    <div className="header ">
                        <div className="pull-left full-height visible-sm visible-xs">
                          <div className="sm-action-bar">
                            <a href="#" className="btn-link toggle-sidebar" data-toggle="sidebar">
                              <span className="icon-set menu-hambuger"></span>
                            </a>
                          </div>
                        </div>
                        <div className=" pull-left sm-table">
                          <div className="header-inner">
                            <Link to="/">
                                <div className="brand inline">
                                  <img src="theme/assets/img/logo.png" 
                                            alt="logo" 
                                            data-src="theme/assets/img/logo.png" 
                                            data-src-retina="theme/assets/img/logo_2x.png" 
                                            width="93" 
                                            height="25"/>
                                </div>
                            </Link>
                          </div>
                        </div>
                          <div className=" pull-right rightSpacing">
                            <div className="visible-lg visible-md">
                              <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
                                <div className="dropdown pull-right rightSpacing">
                                {localStorage['user'] || (user && user.data.id) ? (
                                  <div>
                                    <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                      <span className="thumbnail-wrapper d32 circular inline m-t-5">
                                          <img src="theme/assets/img/profiles/fine.jpg" 
                                                    alt="" 
                                                    data-src="theme/assets/img/profiles/fine.jpg" 
                                                    data-src-retina="theme/assets/img/profiles/fine.jpg" 
                                                    width="32" 
                                                    height="32"/>
                                      </span>
                                    </button>
                                    <ul className="dropdown-menu profile-dropdown" role="menu">
                                      <li>
                                        <Link to="/profile">
                                          <i className="pg-settings_small"></i> 
                                          Settings
                                        </Link>
                                      </li>
                                      <li className="bg-master-lighter" onClick={() => {dispatch(logout());localStorage.removeItem('user');window.location.reload()}}>
                                        <Link to="/" className="clearfix">
                                          <span className="pull-left">Logout</span>
                                          <span className="pull-right"><i className="pg-power"></i></span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  ) : (
                                    <div>
                                      <button className="btn btn-complete btn-cons" data-toggle="modal" data-target="#login-modal">Login</button>
                                      <button className="btn btn-complete btn-cons" data-toggle="modal" data-target="#sign-up-modal">Sign Up</button>
                                    </div>
                                  )
                                }
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <LoginModal />
                    <SignUpModal />
                </div>
        )
    }

}

export default connect(state => ({
  user: state.user.data
}))(Header)
