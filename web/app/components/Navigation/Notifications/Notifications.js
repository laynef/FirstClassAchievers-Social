import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { setNotifications, getNotifications } from '../../../redux/actions/notifications'
import { hashHistory } from 'react-router'


class Notifications extends Component {

    constructor(props) {
        super(props)
        this.state = {
            unread: false
        }
    }

    render() {
        const { notifications, dispatch, user } = this.props
        if (!notifications) return null
        return (
            <div id="Notifications">
                <div className={`dropdown ${this.props.open ? 'open': ''}`}>
                    <div className="dropdown-menu notification-toggle nots" role="menu" aria-labelledby="notification-center">
                        <div className="notification-panel">
                            <div className="scroll-wrapper notification-body scrollable" style={{position: 'relative'}}>
                                <div className="notification-body scrollable scroll-content" style={{height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '134px'}}>
 
                                    <div className={`notification-item ${notifications.length > 0 && !notifications[0].seen ? 'unread' : ''} clearfix`}>
                                        <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                            <a href="#" className="mark"></a>
                                        </div>
                                    </div>
 
                                    {notifications
                                        .sort((a,b) => b.id - a.id)
                                        .map((e, i) => (
                                        <div key={i} className={`notification-item ${!e.seen ? 'unread' : ''} clearfix`} onClick={() => {
                                            dispatch(setNotifications(e.id)); 
                                            dispatch(getNotifications(user.id));
                                            ((e.type === 'INVITE') ? hashHistory.push(`/chat/${user.id}/${e.from}`) : 
                                            (e.type === 'COMMENT') ?  hashHistory.push(`/testimonials/${e.from}`) : 
                                            (e.type === 'LIKE') ?  hashHistory.push(`/testimonials/${e.from}`) : 
                                            (e.type === 'FOLLOW') ?  hashHistory.push(`/profile/${e.from}`) : hashHistory.push(`/chat/${user.id}/${e.from}`))
                                        }}>
                                            <div className="heading">
                                                    <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                                                        <img width="30" height="30" 
                                                                data-src-retina={e.image}
                                                                data-src={e.image} alt="" 
                                                                src={e.image}/>
                                                    </div>
                                                    <a className="text-complete pull-left">
                                                        <span className="fs-12 m-l-10">{e.message}</span>
                                                    </a>
                                                    {/* TIME <span className="pull-right time">{e.createAt}</span> */}
                                                </div>
                                                <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                                    <a className="mark"></a>
                                                </div>
                                            </div>
                                    ))}
                                    </div>

                            <div className="notification-footer text-center" onClick={() => dispatch(getNotifications(user.id))}>
                                <a href="#" className="">{notifications.length > 0 ? 'Read all notifications' : 'No Notifications'}</a>
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
    notifications: state.notifications.data,
    user: state.user.data
}))(Notifications)
