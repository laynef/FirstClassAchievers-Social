import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PrimaryContact from '../../components/Profile/PrimaryContact'
import ProfileImageModal  from '../../components/Profile/ProfileImageModal'


class ProfilePage extends Component {

    render() {
        const { profile } = this.props
        return (
            <div id="ProfilePage" className="col-md-12">
                <h1>My Profile</h1>
                <span id="profileImage"
                    className="thumbnail-wrapper d32 circular inline m-t-5"
                    data-toggle="modal"
                    data-target="#profile-image-modal">
                    <img src={(profile && profile.image) ?profile.image : "theme/assets/img/default-user.png"}
                        alt=""
                        data-src={(profile && profile.image) ?profile.image : "theme/assets/img/default-user.png"}
                        data-src-retina={(profile && profile.image) ?profile.image : "theme/assets/img/default-user.png"}
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