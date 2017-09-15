import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../../../redux/actions/auth';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import ChatNotifications  from './ChatNotifications';
import Notifications  from '../Notifications/Notifications';


@connect(state => ({
	user: state.user.data,
	notifications: state.notifications.data,
}))

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			mobile: false,
		};
	}

	render() {
		const { dispatch, user, notifications } = this.props;
		return (
			<div id="HeaderComponent">
				<div className="header ">
					<div className=" pull-left sm-table">
						<div className="full-height visible-sm visible-xs">
							<div className="sm-action-bar">
								<Link onClick={() => this.setState({mobile: !this.state.mobile})} className="btn-link toggle-sidebar visible-sm-inline-block visible-xs-inline-block padding-5">
									<span className="icon-set menu-hambuger"></span>
								</Link>
							</div>
						</div>
						<div className="header-inner">
							<Link to="/">
								<div className="brand inline">
									<img src="theme/assets/img/logo.png"
										data-src="theme/assets/img/logo.png"
										data-src-retina="theme/assets/img/logo_2x.png"
										width="93"
										alt=""
										height="25"/>
								</div>
							</Link>
						</div>
					</div>
					<div className=" pull-right">
						<div className="header-inner visible-lg visible-md">
							<div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
								<div className="dropdown pull-right">
									{(user && user.id) ? (
										<div className="rightSpacing">
											<div className="dropdown notify">
												<a onClick={() => this.setState({open: !this.state.open})} id="notification-center" className="icon-set globe-fill" data-toggle="dropdown" aria-expanded="false">
													<span className={`${notifications && notifications.length > 0 && !notifications[0].seen ? 'bubble' : ''}`}></span>
												</a>
											</div>
											<button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
												<span className="thumbnail-wrapper d32 circular inline m-t-5">
													<img src={user.image ? user.image : "http://i.imgur.com/sRbuHxN.png"}
														alt=""
														data-src={user.image ? user.image : "http://i.imgur.com/sRbuHxN.png"}
														data-src-retina={user.image ? user.image : "http://i.imgur.com/sRbuHxN.png"}
														width="32"
														height="32"/>
												</span>
											</button>
											<ul className="drops dropdown-menu profile-dropdown" role="menu">
												<li>
													<Link to="/profile">
														<i className="pg-settings_small"></i>
                                            Settings
													</Link>
												</li>
												<li>
													<Link to="/favorites">
														<i className="fs-14 fa fa-heart"></i>
                                            Favorites
													</Link>
												</li>
												<li>
													<Link to="/friends">
														<i className="fs-14 fa fa-users"></i>
                                            Friends
													</Link>
												</li>
												<li className="bg-master-lighter">
													<Link to="/" className="clearfix" onClick={() => dispatch(logout())}>
														<span className="pull-left">Logout</span>
														<span className="pull-right"><i className="pg-power"></i></span>
													</Link>
												</li>
											</ul>
											<Notifications open={this.state.open} />
											<a href="#"
												className="chatLink btn-link icon-set menu-hambuger-plus m-l-20 sm-no-margin hidden-sm hidden-xs"
												data-toggle="quickview"
												data-toggle-element="#quickview">
											</a>
										</div>
									) : (
										<div>
											<button className="btn btn-complete btn-cons" data-toggle="modal" data-target="#login-modal">Login</button>
											<button className="btn btn-complete btn-cons" data-toggle="modal" data-target="#sign-up-modal">Sign Up</button>
										</div>
									)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<LoginModal />
				<SignUpModal />
				<ChatNotifications />
				{this.state.mobile ? (
					<div id="MobileMenu">
						<nav id="sideMenu" className="page-sidebar visible" data-pages="sidebar" style={{zIndex: '100', width: '100vw'}}>
							<div className="sidebar-menu" style={{marginTop: '48px'}}>
								{(!user || !user.id) ? (
									<ul className="menu-items">
										<li className="m-t-30">
											<span className="icon-thumbnail "><i className="pg-home"></i></span>
											<Link onClick={() => this.setState({mobile: false})} to="/" className="detailed">
												<span className="title">Home</span>
											</Link>
										</li>
										<li className="m-t-30">
											<Link onClick={() => this.setState({mobile: false})} to="/testimonials">
												<span className="title">Testimonials</span>
											</Link>
											<span className="icon-thumbnail "><i className="pg-social"></i></span>
										</li>
										<li className="m-t-30" data-toggle="modal" data-target="#login-modal">
											<span className="icon-thumbnail "><i className="pg-home"></i></span>
											<Link onClick={() => this.setState({mobile: false})} to="/" className="detailed">
												<span className="title">Login</span>
											</Link>
										</li>
										<li className="m-t-30"  data-toggle="modal" data-target="#sign-up-modal">
											<span className="icon-thumbnail "><i className="pg-home"></i></span>
											<Link onClick={() => this.setState({mobile: false})} to="/" className="detailed">
												<span className="title">Sign Up</span>
											</Link>
										</li>
									</ul>
								) : (
									<ul className="menu-items">
										<li className="m-t-30">
											<span className="icon-thumbnail "><i className="pg-home"></i></span>
											<Link onClick={() => this.setState({mobile: false})} to="/" className="detailed">
												<span className="title">Home</span>
											</Link>
										</li>
										<li className="m-t-30">
											<span className="icon-thumbnail "><i className="pg-home"></i></span>
											<Link onClick={() => this.setState({mobile: false})} to="/favorites" className="detailed">
												<span className="title">Favorites</span>
											</Link>
										</li>
										<li className="m-t-30">
											<Link onClick={() => this.setState({mobile: false})} to="/friends">
												<span className="title">Friends</span>
											</Link>
											<span className="icon-thumbnail "><i className="pg-social"></i></span>
										</li>
										<li className="m-t-30">
											<Link onClick={() => this.setState({mobile: false})} to="/testimonials">
												<span className="title">Testimonials</span>
											</Link>
											<span className="icon-thumbnail "><i className="pg-social"></i></span>
										</li>
										<li className="m-t-30">
											<Link onClick={() => this.setState({mobile: false})} to="/">
												<span className="title">Logout</span>
											</Link>
											<span className="icon-thumbnail "><i className="pg-social"></i></span>
										</li>
									</ul>
								)}
								<div className="clearfix"></div>
							</div>
						</nav>
						<LoginModal />
						<SignUpModal />
					</div>
				) : null}
			</div>
		);
	}

}
