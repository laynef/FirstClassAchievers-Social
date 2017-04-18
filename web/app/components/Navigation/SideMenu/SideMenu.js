import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'


class SideMenu extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="SideMenuComponent">
                <div className="page-sidebar" data-pages="sidebar">
                  <div id="appMenu" className="sidebar-overlay-slide from-top"></div>
                  <div className="sidebar-header">
                    <img src="theme/assets/img/logo_white.png" alt="logo" className="brand" data-src="theme/assets/img/logo_white.png" data-src-retina="theme/assets/img/logo_white_2x.png" width="93" height="25"/>
                    <div className="sidebar-header-controls">
                      <button data-pages-toggle="#appMenu" className="btn btn-xs sidebar-slide-toggle btn-link m-l-20" type="button"><i className="fa fa-angle-down fs-16"></i>
                      </button>
                      <button data-toggle-pin="sidebar" className="btn btn-link visible-lg-inline" type="button"><i className="fa fs-12"></i>
                      </button>
                    </div>
                  </div>
                  <div className="sidebar-menu">
                    <ul className="menu-items">
                      <li className="m-t-30">
                        <Link to="/" className="detailed">
                          <span className="title">Page 1</span>
                          <span className="details">234 notifications</span>
                        </Link>
                        <span className="icon-thumbnail "><i className="pg-home"></i></span>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="title">Page 2</span>
                        </a>
                        <span className="icon-thumbnail "><i className="pg-social"></i></span>
                      </li>
                      <li className="">
                        <a href="javascript:;">
                          <span className="title">Page 3</span>
                          <span className=" arrow"></span>
                        </a>
                        <span className="icon-thumbnail"><i className="pg-grid"></i></span>
                        <ul className="sub-menu">
                          <li className="">
                            <a href="#">Sub Page 1</a>
                            <span className="icon-thumbnail">sp</span>
                          </li>
                          <li className="">
                            <a href="#">Sub Page 2</a>
                            <span className="icon-thumbnail">sp</span>
                          </li>
                          <li className="">
                            <a href="#">Sub Page 3</a>
                            <span className="icon-thumbnail">sp</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
        )
    }

}

SideMenu = reduxForm({
    form: 'SideMenuComponent'
})(SideMenu)

export default connect(state => ({
}))(SideMenu)
