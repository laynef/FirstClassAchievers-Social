import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { logout } from '../../../redux/actions/auth'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import ChatNotifications  from './ChatNotifications'
import SideMenu  from '../SideMenu/SideMenu'


class Header extends Component {

    render() {
        const { dispatch, user } = this.props
        return (
                <div id="HeaderComponent">
                    <div className="header ">
                        <div className="pull-left full-height visible-sm visible-xs">
                          <div className="sm-action-bar">
                            <a href="#" className="btn-link toggle-sidebar visible-sm-inline-block visible-xs-inline-block padding-5" data-toggle="sidebar">
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
                          <div className=" pull-right">
                            <div className="header-inner visible-lg visible-md">
                              <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
                                <div className="dropdown pull-right">
                                  {(user && user.id) ? (
                                    <div className="rightSpacing">
                                      <div className="dropdown notify">
                                        <a href="javascript:;" id="notification-center" className="icon-set globe-fill" data-toggle="dropdown" aria-expanded="false">
                                          <span className="bubble"></span>
                                        </a>
                                      </div>
                                      <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <span className="thumbnail-wrapper d32 circular inline m-t-5">
                                            <img src={user.image ? user.image : "http://i.imgur.com/sRbuHxN.png"} 
                                              alt="" 
                                              data-src={user.image ? user.image : "http://i.imgur.com/sRbuHxN.png"} 
                                              data-src-retina={user.image ? user.image : "http://i.imgur.com/sRbuHxN.png"} 
                                              width="32" 
                                              height="32"/>
                                        </span>
                                      </button>
                                      <ul className="drops dropdown-menu profile-dropdown" role="menu">
                                        <li>
                                          <Link to="/profile">
                                            <i className="pg-settings_small"></i> 
                                            Settings
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="/favorites">
                                            <i className="fs-14 fa fa-heart"></i> 
                                            Favorites
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="/friends">
                                            <i className="fs-14 fa fa-users"></i> 
                                            Friends
                                          </Link>
                                        </li>
                                        <li className="bg-master-lighter" onClick={() => {dispatch(logout());window.location.reload()}}>
                                          <Link to="/" className="clearfix">
                                            <span className="pull-left">Logout</span>
                                            <span className="pull-right"><i className="pg-power"></i></span>
                                          </Link>
                                        </li>
                                      </ul>
                                      <a href="#" 
                                        className="chatLink btn-link icon-set menu-hambuger-plus m-l-20 sm-no-margin hidden-sm hidden-xs" 
                                        data-toggle="quickview" 
                                        data-toggle-element="#quickview">
                                      </a>
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
                    <ChatNotifications />
                </div>
        )
    }

}

export default connect(state => ({
  user: state.user.data
}))(Header)
