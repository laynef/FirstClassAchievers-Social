import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


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
                    <div className="pull-right full-height visible-sm visible-xs">
                      <div className="sm-action-bar">
                        <a href="#" className="btn-link" data-toggle="quickview" data-toggle-element="#quickview">
                          <span className="icon-set menu-hambuger-plus"></span>
                        </a>
                      </div>
                    </div>
                    <div className=" pull-left sm-table">
                      <div className="header-inner">
                        <div className="brand inline">
                          <img src="theme/assets/img/logo.png" alt="logo" data-src="theme/assets/img/logo.png" data-src-retina="theme/assets/img/logo_2x.png" width="93" height="25"/>
                        </div>
                          <div className=" pull-right">
                            <div className="visible-lg visible-md m-t-10">
                              <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
                                <span className="semi-bold">David</span>
                                <span className="text-master">Nest</span>
                              </div>
                              <div className="thumbnail-wrapper d32 circular inline m-t-5">
                                <img src="theme/assets/img/profiles/avatar.jpg" alt="" data-src="theme/assets/img/profiles/avatar.jpg" data-src-retina="theme/assets/img/profiles/avatar_small2x.jpg" width="32" height="32"/>
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

export default connect()(Header)
