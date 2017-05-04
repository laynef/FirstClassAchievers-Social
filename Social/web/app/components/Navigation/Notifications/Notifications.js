import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class Notifications extends Component {

    render() {
        return (
            <div id="Notifications">
                <div class="dropdown open">
                    <a href="javascript:;" id="notification-center" class="icon-set globe-fill" data-toggle="dropdown" aria-expanded="true">
                        <span class="bubble"></span>
                    </a>
                    <div class="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">
                        <div class="notification-panel">
                            <div class="scroll-wrapper notification-body scrollable" style={{position: 'relative'}}>
                                <div class="notification-body scrollable scroll-content" style={{height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '343px'}}>
  
                                    <div class="notification-item  clearfix">
                                        <div class="heading">
                                            <a href="#" class="text-danger pull-left">
                                                <i class="fa fa-exclamation-triangle m-r-10"></i>
                                                <span class="bold">98% Server Load</span>
                                                <span class="fs-12 m-l-10">Take Action</span>
                                            </a>
                                            <span class="pull-right time">2 mins ago</span>
                                        </div>
                                        <div class="option">
                                            <a href="#" class="mark"></a>
                                        </div>
                                    </div>

                                <div class="notification-footer text-center">
                                    <a href="#" class="">Read all notifications</a>
                                        <a data-toggle="refresh" class="portlet-refresh text-black pull-right" href="#">
                                            <i class="pg-refresh_new"></i>
                                        </a>
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

Notifications = reduxForm({
    form: 'Notifications'
})(Notifications)

export default connect(state => ({
}))(Notifications)
