import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PrimaryContact from '../../components/Profile/PrimaryContact';
import ProfileImageModal  from '../../components/Profile/ProfileImageModal';
import { getProfile } from '../../redux/actions/profile';


class ProfilePage extends Component {

	componentDidMount() {
		const { dispatch, user } = this.props;
		dispatch(getProfile(user.id));
	}

	render() {
		const { profile, user } = this.props;
		if (!profile) return null;
		return (
			<div id="ProfilePage" className="col-md-12">
				<h1>My Profile</h1>
				<span id="profileImage"
					className="thumbnail-wrapper d32 circular inline m-t-5"
					data-toggle="modal"
					data-target="#profile-image-modal">
					<img src={(user && user.image) ?user.image : "http://i.imgur.com/sRbuHxN.png"}
						alt=""
						data-src={(user && user.image) ?user.image : "http://i.imgur.com/sRbuHxN.png"}
						data-src-retina={(user && user.image) ?user.image : "http://i.imgur.com/sRbuHxN.png"}
						width="320"
						height="320"/>
				</span>
				<PrimaryContact />
				<ProfileImageModal />
			</div>
		);
	}

}

ProfilePage = reduxForm({
	form: 'ProfilePage',
})(ProfilePage);

export default connect(state => ({
	profile: state.profile.data,
	user: state.user.data,
}))(ProfilePage);
