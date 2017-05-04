import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'


class FriendsPage extends Component {

    render() {
        const { friends } = this.props
        if (!friends) return null
        return (
            <div id="FriendsPage" className="container-fluid padding-25 sm-padding-10">
                <h1>Friends</h1>
                <div className="row">
                    {friends.map((e, i) => (
                        <Link key={i} to={`profile/${e.user_id}`}>
                            <div className="col-md-3 m-b-10">
                                <div className="ar-1-1 widget-1-wrapper">
                                    <div className="imgs widget-2 panel no-border bg-primary widget widget-loader-circle-lg no-margin"
                                        style={{backgroundImage: `url(${e.image})`}}>
                                        <div className="panel-heading">
                                            <div className="panel-controls">
                                                <ul>
                                                    <li>
                                                        <a className="portlet-refresh" data-toggle="refresh">
                                                            <i className="portlet-icon portlet-icon-refresh-lg-white"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="panel-body">
                                            <div className="pull-bottom bottom-left bottom-right padding-25">
                                                <h3 className="text-white">{e.firstName + ' ' + e.lastName}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }

}

FriendsPage = reduxForm({
    form: 'FriendsPage'
})(FriendsPage)

export default connect(state => ({
    friends: state.friends.data
}))(FriendsPage)