import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { getFriends } from '../../redux/actions/friends'


class FriendsPage extends Component {

    componentDidMount() {
        const { dispatch, user } = this.props
        dispatch(getFriends(user.id))
    }

    componentWillUnmount() {
        const { friends } = this.props
        localStorage.setItem('friends', JSON.stringify(friends))
    }

    render() {
        const { friends, user } = this.props
        if (!user) return null
        let people = friends || JSON.parse(localStorage.getItem('friends')) || []
        return (
            <div id="FriendsPage" className="container-fluid padding-25 sm-padding-10">
                <h1>Following</h1>
                <div className="row">
                    {people.map((e, i) => (
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
    friends: state.friends.data,
    user: state.user.data
}))(FriendsPage)