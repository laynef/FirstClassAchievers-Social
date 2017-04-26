import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PrimaryContact from '../../components/Profile/PrimaryContact'
import ProfileImageModal  from '../../components/Profile/ProfileImageModal'
import { getProfile } from '../../redux/actions/profile'


class ProfilePage extends Component {

    componentDidMount() {
        const { dispatch, params } = this.props
        dispatch(getProfile(params.userId))
    }

    render() {
        const { profile, params } = this.props
        if (!profile && profile.user_id != params.userId) return null;
        return (
            <div id="ProfilePage" className="col-md-12">
                <h1>My Profile</h1>
                <span id="profileImage"
                    className="thumbnail-wrapper d32 circular inline m-t-5"
                    data-toggle="modal"
                    data-target="#profile-image-modal">
                    <img src={(profile && profile.image) ?profile.image : "http://i.imgur.com/sRbuHxN.png"}
                        alt=""
                        data-src={(profile && profile.image) ?profile.image : "http://i.imgur.com/sRbuHxN.png"}
                        data-src-retina={(profile && profile.image) ?profile.image : "http://i.imgur.com/sRbuHxN.png"}
                        width="320"
                        height="320"/>
                </span>
                <PrimaryContact />
                <ProfileImageModal />
            </div>
        )
    }

}

ProfilePage = reduxForm({
    form: 'ProfilePage'
})(ProfilePage)

export default connect(state => ({
    profile: state.profile.data
}))(ProfilePage)