import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'


class Header extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
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
                                  <img src="theme/assets/img/logo.png" alt="logo" data-src="theme/assets/img/logo.png" data-src-retina="theme/assets/img/logo_2x.png" width="93" height="25"/>
                                </div>
                            </Link>
                          </div>
                        </div>
                          <div className=" pull-right rightSpacing">
                            <div className="visible-lg visible-md">
                              <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
                                <div className="dropdown pull-right rightSpacing">
                                  <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <span className="thumbnail-wrapper d32 circular inline m-t-5">
                                        <img src="theme/assets/img/profiles/fine.jpg" alt="" data-src="theme/assets/img/profiles/fine.jpg" data-src-retina="theme/assets/img/profiles/fine.jpg" width="32" height="32"/>
                                    </span>
                                  </button>
                                  <ul className="dropdown-menu profile-dropdown" role="menu">
                                    <li>
                                      <a href="#">
                                        <i className="pg-settings_small"></i> 
                                        Settings
                                      </a>
                                    </li>
                                    <li className="bg-master-lighter">
                                      <a href="#" className="clearfix">
                                        <span className="pull-left">Logout</span>
                                        <span className="pull-right"><i className="pg-power"></i></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default connect(state => ({
}))(Header)
