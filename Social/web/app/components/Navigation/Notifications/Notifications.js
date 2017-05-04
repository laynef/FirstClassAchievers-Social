import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { setNotifications } from '../../../redux/actions/notifications'


class Notifications extends Component {

    constructor(props) {
        super(props)
        this.state = {
            unread: false
        }
    }

    checkUnread() {
        const { notifications } = this.props
        return notifications.filter(e => !e.seen)
    }

    markRead(id) {
        const { dispatch, user } = this.props
        dispatch(setNotifications(user.id, id))
    }

    render() {
        const { notifications } = this.props
        if (!notifications) return null
        return (
            <div id="Notifications">
                <div className={`dropdown ${this.props.open ? 'open': ''}`}>
                    <div className="dropdown-menu notification-toggle nots" role="menu" aria-labelledby="notification-center">
                        <div className="notification-panel">
                            <div className="scroll-wrapper notification-body scrollable" style={{position: 'relative'}}>
                                <div className="notification-body scrollable scroll-content" style={{height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '134px'}}>
 
                                    <div className={`notification-item ${!notifications[0].seen ? 'unread' : ''} clearfix`}>
                                        <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                            <a href="#" className="mark"></a>
                                        </div>
                                    </div>
 
                                    {notifications.map((e, i) => (
                                        <div key={i} className={`notification-item ${!e.seen ? 'unread' : ''} clearfix`} onClick={() => this.markRead(e.id)}>
                                            <div className="heading">
                                                    <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                                                        <img width="30" height="30" 
                                                                data-src-retina={e.image}
                                                                data-src={e.image} alt="" 
                                                                src={e.image}/>
                                                    </div>
                                                    <a href="#" className="text-complete pull-left">
                                                        <span className="fs-12 m-l-10">{e.message}</span>
                                                    </a>
                                                    <span className="pull-right time">{e.createAt}</span>
                                                </div>
                                                <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                                    <a href="#" className="mark"></a>
                                                </div>
                                            </div>
                                    ))}
                                    </div>

                            <div className="notification-footer text-center">
                                <a href="#" className="">{notifications.length ? 'Read all notifications' : 'No Notifications'}</a>
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
