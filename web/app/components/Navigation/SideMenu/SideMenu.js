import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'


class SideMenu extends Component {

    render() {
        return (
            <div id="SideMenuComponent">
                <nav id="sideMenu" className="page-sidebar" data-pages="sidebar">
                  <div id="appMenu" className="sidebar-overlay-slide from-top"></div>
                  <div className="sidebar-header">
                    <img src="./theme/assets/img/logo_white.png" className="brand" data-src="./theme/assets/img/logo_white.png" data-src-retina="./theme/assets/img/logo_white_2x.png" width="93" height="25"/>
                    <div className="sidebar-header-controls">
                      <button data-toggle-pin="sidebar" className="btn btn-link visible-lg-inline" type="button">
                        <i className="fa fs-12"></i>
                      </button>
                    </div>
                  </div>
                  <div className="sidebar-menu">
                    <ul className="menu-items">
                      <li className="m-t-30">
                        <span className="icon-thumbnail "><i className="pg-home"></i></span>
                        <Link to="/" className="detailed">
                          <span className="title">Home</span>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/testimonials">
                          <span className="title">Testimonials</span>
                        </Link>
                        <span className="icon-thumbnail "><i className="pg-social"></i></span>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                </nav>
            </div>
        )
    }

}

SideMenu = reduxForm({
    form: 'SideMenuComponent'
})(SideMenu)

export default connect(state => ({
}))(SideMenu)
