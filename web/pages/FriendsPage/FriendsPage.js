import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { getFriends } from '../../redux/actions/friends';


@connect(state => ({
	friends: state.friends.data,
	user: state.user.data,
}))

@reduxForm({
	form: 'FriendsPage',
})

export default class FriendsPage extends Component {

	componentDidMount() {
		const { dispatch, user } = this.props;
		if (user) {
			dispatch(getFriends(user.id));
		}
	}

	render() {
		const { friends } = this.props;
		return (
			<div id="FriendsPage" className="container-fluid padding-25 sm-padding-10">
				<h1>Following</h1>
				<div className="row">
					{friends && friends.map((e, i) => (
						<Link key={i} to={`profile/${e.user_id}`}>
							<div className="col-md-3 m-b-10">
								<div className="ar-1-1 widget-1-wrapper">
									<div className="imgs widget-2 panel no-border bg-primary widget widget-loader-circle-lg no-margin"
										style={{backgroundImage: `url(${e.image ? e.image : 'http://i.imgur.com/sRbuHxN.png'})`}}>
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
												<h3 className="text-white">{e.firstName && e.lastName ? e.firstName + ' ' + e.lastName : ''}</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		);
	}

}


