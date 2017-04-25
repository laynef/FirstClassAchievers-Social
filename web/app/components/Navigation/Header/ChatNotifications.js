import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class ChatNotifications extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="ChatNotifications">
                <div id="quickview" className="quickview-wrapper open" data-pages="quickview">
      {/* Nav tabs */}
      <ul className="nav nav-tabs">
        <li className="">
          <a href="#quickview-notes" data-toggle="tab">Notes</a>
        </li>
        <li>
          <a href="#quickview-alerts" data-toggle="tab">Alerts</a>
        </li>
        <li className="active">
          <a href="#quickview-chat" data-toggle="tab">Chat</a>
        </li>
      </ul>
      <a className="btn-link quickview-toggle" data-toggle-element="#quickview" data-toggle="quickview"><i className="pg-close"></i></a>
      {/* Tab panes */}
      <div className="tab-content">
        {/* BEGIN Notes  */}
        <div className="tab-pane fade  in no-padding" id="quickview-notes">
          <div className="view-port clearfix quickview-notes" id="note-views">
            {/* BEGIN Note List  */}
            <div className="view list" id="quick-note-list">
              <div className="toolbar clearfix">
                <ul className="pull-right ">
                  <li>
                    <a href="#" className="delete-note-link"><i className="fa fa-trash-o"></i></a>
                  </li>
                  <li>
                    <a href="#" className="new-note-link" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="fa fa-plus"></i></a>
                  </li>
                </ul>
                <button className="btn-remove-notes btn btn-xs btn-block hide"><i className="fa fa-times"></i> Delete</button>
              </div>
              <ul>
                {/* BEGIN Note Item  */}
                <li data-noteid="1">
                  <div className="left">
                    {/* BEGIN Note Action  */}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox1" type="checkbox" value="1"/>
                      <label htmlFor="qncheckbox1"></label>
                    </div>
                    {/* END Note Action  */}
                    {/* BEGIN Note Preview Text  */}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text  */}
                  </div>
                  {/* BEGIN Note Details  */}
                  <div className="right pull-right">
                    {/* BEGIN Note Date  */}
                    <span className="date">12/12/14</span>
                    <a href="#" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date  */}
                  </div>
                  {/* END Note Details  */}
                </li>
                {/* END Note List  */}
                {/* BEGIN Note Item  */}
                <li data-noteid="2">
                  <div className="left">
                    {/* BEGIN Note Action  */}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox2" type="checkbox" value="1"/>
                      <label htmlFor="qncheckbox2"></label>
                    </div>
                    {/* END Note Action  */}
                    {/* BEGIN Note Preview Text  */}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text  */}
                  </div>
                  {/* BEGIN Note Details  */}
                  <div className="right pull-right">
                    {/* BEGIN Note Date  */}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date  */}
                  </div>
                  {/* END Note Details  */}
                </li>
                {/* END Note List  */}
                {/* BEGIN Note Item  */}
                <li data-noteid="2">
                  <div className="left">
                    {/* BEGIN Note Action  */}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox3" type="checkbox" value="1"/>
                      <label htmlFor="qncheckbox3"></label>
                    </div>
                    {/* END Note Action  */}
                    {/* BEGIN Note Preview Text  */}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text  */}
                  </div>
                  {/* BEGIN Note Details  */}
                  <div className="right pull-right">
                    {/* BEGIN Note Date  */}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date  */}
                  </div>
                  {/* END Note Details  */}
                </li>
                {/* END Note List  */}
                {/* BEGIN Note Item  */}
                <li data-noteid="3">
                  <div className="left">
                    {/* BEGIN Note Action  */}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox4" type="checkbox" value="1"/>
                      <label htmlFor="qncheckbox4"></label>
                    </div>
                    {/* END Note Action  */}
                    {/* BEGIN Note Preview Text  */}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text  */}
                  </div>
                  {/* BEGIN Note Details  */}
                  <div className="right pull-right">
                    {/* BEGIN Note Date  */}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date  */}
                  </div>
                  {/* END Note Details  */}
                </li>
                {/* END Note List  */}
                {/* BEGIN Note Item  */}
                <li data-noteid="4">
                  <div className="left">
                    {/* BEGIN Note Action  */}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox5" type="checkbox" value="1"/>
                      <label htmlFor="qncheckbox5"></label>
                    </div>
                    {/* END Note Action  */}
                    {/* BEGIN Note Preview Text  */}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text  */}
                  </div>
                  {/* BEGIN Note Details  */}
                  <div className="right pull-right">
                    {/* BEGIN Note Date  */}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date  */}
                  </div>
                  {/* END Note Details  */}
                </li>
                {/* END Note List  */}
              </ul>
            </div>
            {/* END Note List  */}
            <div className="view note" id="quick-note">
              <div>
                <ul className="toolbar">
                  <li><a href="#" className="close-note-link"><i className="pg-arrow_left"></i></a>
                  </li>
                  <li><a href="#" data-action="Bold"><i className="fa fa-bold"></i></a>
                  </li>
                  <li><a href="#" data-action="Italic"><i className="fa fa-italic"></i></a>
                  </li>
                  <li><a href="#" className=""><i className="fa fa-link"></i></a>
                  </li>
                </ul>
                <div className="body">
                  <div>
                    <div className="top">
                      <span>21st april 2014 2:13am</span>
                    </div>
                    <div className="content">
                      <div className="quick-note-editor full-width full-height js-input" contenteditable="true"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Notes  */}
        {/* BEGIN Alerts  */}
        <div className="tab-pane fade no-padding" id="quickview-alerts">
          <div className="view-port clearfix" id="alerts">
            {/* BEGIN Alerts View  */}
            <div className="view bg-white">
              {/* BEGIN View Header  */}
              <div className="navbar navbar-default navbar-sm">
                <div className="navbar-inner">
                  {/* BEGIN Header Controler  */}
                  <a href="javascript:;" className="inline action p-l-10 link text-master" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                    <i className="pg-more"></i>
                  </a>
                  {/* END Header Controler  */}
                  <div className="view-heading">
                    Notications
                  </div>
                  {/* BEGIN Header Controler  */}
                  <a href="#" className="inline action p-r-10 pull-right link text-master">
                    <i className="pg-search"></i>
                  </a>
                  {/* END Header Controler  */}
                </div>
              </div>
              {/* END View Header  */}
              {/* BEGIN Alert List  */}
              <div data-init-list-view="ioslist" className="list-view boreded no-top-border"><h2 className="list-view-fake-header">
                    Sever Status
                  </h2>
                {/* BEGIN List Group  */}
                <div className="scroll-wrapper list-view-wrapper" style="position: absolute;"><div className="list-view-wrapper scroll-content" data-ios="false" style="height: 100px; margin-bottom: 0px; margin-right: 0px; max-height: none;"><div className="list-view-group-container">
                  {/* BEGIN List Group Header */}
                  <div className="list-view-group-header text-uppercase">
                    Calendar
                  </div>
                  {/* END List Group Header */}
                  <ul>
                    {/* BEGIN List Group Item */}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation  */}
                      <a href="javascript:;" className="" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="col-xs-height col-middle">
                          <span className="text-warning fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="p-l-10 col-xs-height col-middle col-xs-9 overflow-ellipsis fs-12">
                          <span className="text-master">David Nester Birthday</span>
                        </p>
                        <p className="p-r-10 col-xs-height col-middle fs-12 text-right">
                          <span className="text-warning">Today <br/></span>
                          <span className="text-master">All Day</span>
                        </p>
                      </a>
                      {/* END Alert Item */}
                      {/* BEGIN List Group Item */}
                    </li>
                    {/* END List Group Item */}
                    {/* BEGIN List Group Item */}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation  */}
                      <a href="#" className="" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="col-xs-height col-middle">
                          <span className="text-warning fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="p-l-10 col-xs-height col-middle col-xs-9 overflow-ellipsis fs-12">
                          <span className="text-master">Meeting at 2:30</span>
                        </p>
                        <p className="p-r-10 col-xs-height col-middle fs-12 text-right">
                          <span className="text-warning">Today</span>
                        </p>
                      </a>
                      {/* END Alert Item */}
                    </li>
                    {/* END List Group Item */}
                  </ul>
                </div><div className="list-view-group-container">
                  {/* BEGIN List Group Header */}
                  <div className="list-view-group-header text-uppercase">
                    Social
                  </div>
                  {/* END List Group Header */}
                  <ul>
                    {/* BEGIN List Group Item */}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation  */}
                      <a href="javascript:;" className="p-t-10 p-b-10" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="col-xs-height col-middle">
                          <span className="text-complete fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12 overflow-ellipsis fs-12">
                          <span className="text-master link">Jame Smith commented on your status<br/></span>
                          <span className="text-master">“Perfection Simplified - Company Revox"</span>
                        </p>
                      </a>
                      {/* END Alert Item */}
                    </li>
                    {/* END List Group Item */}
                    {/* BEGIN List Group Item */}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation  */}
                      <a href="javascript:;" className="p-t-10 p-b-10" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="col-xs-height col-middle">
                          <span className="text-complete fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12 overflow-ellipsis fs-12">
                          <span className="text-master link">Jame Smith commented on your status<br/></span>
                          <span className="text-master">“Perfection Simplified - Company Revox"</span>
                        </p>
                      </a>
                      {/* END Alert Item */}
                    </li>
                    {/* END List Group Item */}
                  </ul>
                </div><div className="list-view-group-container">
                  {/* BEGIN List Group Header */}
                  <div className="list-view-group-header text-uppercase">
                    Sever Status
                  </div>
                  {/* END List Group Header */}
                  <ul>
                    {/* BEGIN List Group Item */}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation  */}
                      <a href="#" className="p-t-10 p-b-10" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="col-xs-height col-middle">
                          <span className="text-danger fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12 overflow-ellipsis fs-12">
                          <span className="text-master link">12:13AM GTM, 10230, ID:WR174s<br/></span>
                          <span className="text-master">Server Load Exceeted. Take action</span>
                        </p>
                      </a>
                      {/* END Alert Item */}
                    </li>
                    {/* END List Group Item */}
                  </ul>
                </div></div><div className="scroll-element scroll-x"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar"></div></div></div><div className="scroll-element scroll-y"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar"></div></div></div></div>
                {/* END List Group  */}
                
                
              </div>
              {/* END Alert List  */}
            </div>
            {/* EEND Alerts View  */}
          </div>
        </div>
        {/* END Alerts  */}
        <div className="tab-pane fade in active no-padding" id="quickview-chat">
          <div className="view-port clearfix" id="chat">
            <div className="view bg-white">
              {/* BEGIN View Header  */}
              <div className="navbar navbar-default">
                <div className="navbar-inner">
                  {/* BEGIN Header Controler  */}
                  <a href="javascript:;" className="inline action p-l-10 link text-master" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                    <i className="pg-plus"></i>
                  </a>
                  {/* END Header Controler  */}
                  <div className="view-heading">
                    Chat List
                    <div className="fs-11">Show All</div>
                  </div>
                  {/* BEGIN Header Controler  */}
                  <a href="#" className="inline action p-r-10 pull-right link text-master">
                    <i className="pg-more"></i>
                  </a>
                  {/* END Header Controler  */}
                </div>
              </div>
              {/* END View Header  */}
              <div data-init-list-view="ioslist" className="list-view boreded no-top-border"><h2 className="list-view-fake-header">
                    a</h2>
                <div className="scroll-wrapper list-view-wrapper" style="position: absolute;"><div className="list-view-wrapper scroll-content scroll-scrolly_visible" data-ios="false" style="height: auto; margin-bottom: 0px; margin-right: 0px; max-height: 808px;"><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">
                    a</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/1x.jpg" data-src="theme/assets/img/profiles/1.jpg" src="theme/assets/img/profiles/1.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">ava flores</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">b</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/2x.jpg" data-src="theme/assets/img/profiles/2.jpg" src="theme/assets/img/profiles/2.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">bella mccoy</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/3x.jpg" data-src="theme/assets/img/profiles/3.jpg" src="theme/assets/img/profiles/3.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">bob stephens</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">c</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/4x.jpg" data-src="theme/assets/img/profiles/4.jpg" src="theme/assets/img/profiles/4.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">carole roberts</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/5x.jpg" data-src="theme/assets/img/profiles/5.jpg" src="theme/assets/img/profiles/5.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">christopher perez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">d</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/6x.jpg" data-src="theme/assets/img/profiles/6.jpg" src="theme/assets/img/profiles/6.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">danielle fletcher</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/7x.jpg" data-src="theme/assets/img/profiles/7.jpg" src="theme/assets/img/profiles/7.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">david sutton</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">e</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/8x.jpg" data-src="theme/assets/img/profiles/8.jpg" src="theme/assets/img/profiles/8.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">earl hamilton</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/9x.jpg" data-src="theme/assets/img/profiles/9.jpg" src="theme/assets/img/profiles/9.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">elaine lawrence</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/1x.jpg" data-src="theme/assets/img/profiles/1.jpg" src="theme/assets/img/profiles/1.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">ellen grant</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/2x.jpg" data-src="theme/assets/img/profiles/2.jpg" src="theme/assets/img/profiles/2.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">erik taylor</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/3x.jpg" data-src="theme/assets/img/profiles/3.jpg" src="theme/assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">everett wagner</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">f</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/4x.jpg" data-src="theme/assets/img/profiles/4.jpg" src="theme/assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">freddie gomez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">g</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/5x.jpg" data-src="theme/assets/img/profiles/5.jpg" src="theme/assets/img/profiles/5x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">glen jensen</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/6x.jpg" data-src="theme/assets/img/profiles/6.jpg" src="theme/assets/img/profiles/6x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">gwendolyn walker</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">j</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/7x.jpg" data-src="theme/assets/img/profiles/7.jpg" src="theme/assets/img/profiles/7x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">janet romero</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">k</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/8x.jpg" data-src="theme/assets/img/profiles/8.jpg" src="theme/assets/img/profiles/8x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">kim martinez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">l</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/9x.jpg" data-src="theme/assets/img/profiles/9.jpg" src="theme/assets/img/profiles/9x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">lawrence white</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/1x.jpg" data-src="theme/assets/img/profiles/1.jpg" src="theme/assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">leroy bell</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/2x.jpg" data-src="theme/assets/img/profiles/2.jpg" src="theme/assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">letitia carr</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/3x.jpg" data-src="theme/assets/img/profiles/3.jpg" src="theme/assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">lucy castro</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">m</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/4x.jpg" data-src="theme/assets/img/profiles/4.jpg" src="theme/assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">mae hayes</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/5x.jpg" data-src="theme/assets/img/profiles/5.jpg" src="theme/assets/img/profiles/5x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">marilyn owens</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/6x.jpg" data-src="theme/assets/img/profiles/6.jpg" src="theme/assets/img/profiles/6x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">marlene cole</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/7x.jpg" data-src="theme/assets/img/profiles/7.jpg" src="theme/assets/img/profiles/7x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">marsha warren</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/8x.jpg" data-src="theme/assets/img/profiles/8.jpg" src="theme/assets/img/profiles/8x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">marsha dean</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/9x.jpg" data-src="theme/assets/img/profiles/9.jpg" src="theme/assets/img/profiles/9x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">mia diaz</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">n</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/1x.jpg" data-src="theme/assets/img/profiles/1.jpg" src="theme/assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">noah elliott</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">p</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/2x.jpg" data-src="theme/assets/img/profiles/2.jpg" src="theme/assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">phyllis hamilton</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">r</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/3x.jpg" data-src="theme/assets/img/profiles/3.jpg" src="theme/assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">raul rodriquez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/4x.jpg" data-src="theme/assets/img/profiles/4.jpg" src="theme/assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">rhonda barnett</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/5x.jpg" data-src="theme/assets/img/profiles/5.jpg" src="theme/assets/img/profiles/5x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">roberta king</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">s</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/6x.jpg" data-src="theme/assets/img/profiles/6.jpg" src="theme/assets/img/profiles/6x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">scott armstrong</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/7x.jpg" data-src="theme/assets/img/profiles/7.jpg" src="theme/assets/img/profiles/7x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">sebastian austin</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/8x.jpg" data-src="theme/assets/img/profiles/8.jpg" src="theme/assets/img/profiles/8x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">sofia davis</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">t</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/9x.jpg" data-src="theme/assets/img/profiles/9.jpg" src="theme/assets/img/profiles/9x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">terrance young</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/1x.jpg" data-src="theme/assets/img/profiles/1.jpg" src="theme/assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">theodore woods</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/2x.jpg" data-src="theme/assets/img/profiles/2.jpg" src="theme/assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">todd wood</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/3x.jpg" data-src="theme/assets/img/profiles/3.jpg" src="theme/assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">tommy jenkins</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div><div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">w</div>
                  <ul>
                    {/* BEGIN Chat User List Item   */}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="col-xs-height col-middle">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/4x.jpg" data-src="theme/assets/img/profiles/4.jpg" src="theme/assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        </span>
                        <p className="p-l-10 col-xs-height col-middle col-xs-12">
                          <span className="text-master">wilma hicks</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item   */}
                  </ul>
                </div></div><div className="scroll-element scroll-x scroll-scrolly_visible"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style="width: 89px;"></div></div></div><div className="scroll-element scroll-y scroll-scrolly_visible"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style="height: 227px; top: 0px;"></div></div></div></div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
              </div>
            </div>
            {/* BEGIN Conversation View   */}
            <div className="view chat-view bg-white clearfix">
              {/* BEGIN Header   */}
              <div className="navbar navbar-default">
                <div className="navbar-inner">
                  <a href="javascript:;" className="link text-master inline action p-l-10 p-r-10" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                    <i className="pg-arrow_left"></i>
                  </a>
                  <div className="view-heading">
                    John Smith
                    <div className="fs-11 hint-text">Online</div>
                  </div>
                  <a href="#" className="link text-master inline action p-r-10 pull-right ">
                    <i className="pg-more"></i>
                  </a>
                </div>
              </div>
              {/* END Header   */}
              {/* BEGIN Conversation   */}
              <div className="chat-inner" id="my-conversation">
                {/* BEGIN From Me Message   */}
                <div className="message clearfix">
                  <div className="chat-bubble from-me">
                    Hello there
                  </div>
                </div>
                {/* END From Me Message   */}
                {/* BEGIN From Them Message   */}
                <div className="message clearfix">
                  <div className="profile-img-wrapper m-t-5 inline">
                    <img className="col-top" width="30" height="30" src="theme/assets/img/profiles/avatar_small.jpg" alt="" data-src="theme/assets/img/profiles/avatar_small.jpg" data-src-retina="theme/assets/img/profiles/avatar_small2x.jpg"/>
                  </div>
                  <div className="chat-bubble from-them">
                    Hey
                  </div>
                </div>
                {/* END From Them Message   */}
                {/* BEGIN From Me Message   */}
                <div className="message clearfix">
                  <div className="chat-bubble from-me">
                    Did you check out Pages framework ?
                  </div>
                </div>
                {/* END From Me Message   */}
                {/* BEGIN From Me Message   */}
                <div className="message clearfix">
                  <div className="chat-bubble from-me">
                    Its an awesome chat
                  </div>
                </div>
                {/* END From Me Message   */}
                {/* BEGIN From Them Message   */}
                <div className="message clearfix">
                  <div className="profile-img-wrapper m-t-5 inline">
                    <img className="col-top" width="30" height="30" src="theme/assets/img/profiles/avatar_small.jpg" alt="" data-src="theme/assets/img/profiles/avatar_small.jpg" data-src-retina="theme/assets/img/profiles/avatar_small2x.jpg"/>
                  </div>
                  <div className="chat-bubble from-them">
                    Yea
                  </div>
                </div>
                {/* END From Them Message   */}
              </div>
              {/* BEGIN Conversation   */}
              {/* BEGIN Chat Input   */}
              <div className="b-t b-grey bg-white clearfix p-l-10 p-r-10">
                <div className="row">
                  <div className="col-xs-1 p-t-15">
                    <a href="#" className="link text-master"><i className="fa fa-plus-circle"></i></a>
                  </div>
                  <div className="col-xs-8 no-padding">
                    <input type="text" className="form-control chat-input" data-chat-input="" data-chat-conversation="#my-conversation" placeholder="Say something"/>
                  </div>
                  <div className="col-xs-2 link text-master m-l-10 m-t-15 p-l-10 b-l b-grey col-top">
                    <a href="#" className="link text-master"><i className="pg-camera"></i></a>
                  </div>
                </div>
              </div>
              {/* END Chat Input   */}
            </div>
            {/* END Conversation View   */}
          </div>
        </div>
      </div>
    </div>
            </div>
        )
    }

}

ChatNotifications = reduxForm({
    form: 'ChatNotifications'
})(ChatNotifications)

export default connect(state => ({
}))(ChatNotifications)
