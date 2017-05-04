import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class Notifications extends Component {

    render() {
        return (
            <div id="Notifications">
                <div className="dropdown open">
                    <div className="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">
                        <div className="notification-panel">
                            <div className="scroll-wrapper notification-body scrollable" style={{position: 'relative'}}>
                                <div className="notification-body scrollable scroll-content" style={{height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '134px'}}>
 
                                    <div className="notification-item unread clearfix">
                                        <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                            <a href="#" className="mark"></a>
                                        </div>
                                    </div>
 
                                    <div className="notification-item unread clearfix">
                                        <div className="heading">
                                                <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                                                    <img width="30" height="30" 
                                                            data-src-retina="assets/img/profiles/1x.jpg" 
                                                            data-src="assets/img/profiles/1.jpg" alt="" 
                                                            src="assets/img/profiles/1.jpg"/>
                                                </div>
                                                <a href="#" className="text-complete pull-left">
                                                    <span className="bold">Revox Design Labs</span>
                                                    <span className="fs-12 m-l-10">Owners</span>
                                                </a>
                                                <span className="pull-right time">11:00pm</span>
                                            </div>
                                            <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                                <a href="#" className="mark"></a>
                                            </div>
                                        </div>
                                    </div>
 
                            <div className="notification-footer text-center">
                                <a href="#" className="">Read all notifications</a>
                                <a data-toggle="refresh" className="portlet-refresh text-black pull-right" href="#">
                                    <i className="pg-refresh_new"></i>
                                </a>
                            </div>
            
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
        )
    }

}

Notifications = reduxForm({
    form: 'Notifications'
})(Notifications)

export default connect(state => ({
}))(Notifications)
