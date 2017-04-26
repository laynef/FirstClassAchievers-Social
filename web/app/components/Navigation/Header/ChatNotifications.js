import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ContactListAlphabet  from '../../Navigation/Chat/ContactListAlphabet'
import ConversionView  from '../../Navigation/Chat/ConversionView'


class ChatNotifications extends Component {

    render() {
        return (
            <div id="ChatNotifications">
                <div id="quickview" className="quickview-wrapper" data-pages="quickview">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="#quickview-chat" data-toggle="tab">Chat</a>
                        </li>
                    </ul>
                    <a className="btn-link quickview-toggle" data-toggle-element="#quickview" data-toggle="quickview">
                        <i className="pg-close"></i>
                    </a>
                    <div className="tab-content">
                        <div className="tab-pane fade in active no-padding" id="quickview-chat">
                            <div className="view-port clearfix" id="chat">
                                <div className="view bg-white">
                                    <div className="navbar navbar-default">
                                        <div className="navbar-inner">
                                            <a href="javascript:" className="inline action p-l-10 link text-master" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                <i className="pg-plus"></i>
                                            </a>
                                            <div className="view-heading">
                                                Chat List
                                                <div className="fs-11">Show All</div>
                                            </div>
                                            <a href="#" className="inline action p-r-10 pull-right link text-master">
                                                <i className="pg-more"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <ContactListAlphabet />
                                </div>
                            <ConversionView />
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
