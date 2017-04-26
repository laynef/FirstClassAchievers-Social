import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class ConversionView extends Component {

    render() {
        return (
            <div id="ConversionView">
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
        )
    }

}

ConversionView = reduxForm({
    form: 'ConversionView'
})(ConversionView)

export default connect(state => ({
}))(ConversionView)
