import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PrimaryContact from '../../components/Profile/PrimaryContact'


class ProfilePage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="ProfilePage" className="col-md-12">
                <h1>My Profile</h1>
                <span id="profileImage" className="thumbnail-wrapper d32 circular inline m-t-5">
                    <img src="theme/assets/img/profiles/fine.jpg" 
                                alt="" 
                                data-src="theme/assets/img/profiles/fine.jpg" 
                                data-src-retina="theme/assets/img/profiles/fine.jpg" 
                                width="320" 
                                height="320"/>
                </span>
                <PrimaryContact />
            </div>
        )
    }

}

ProfilePage = reduxForm({
    form: 'ProfilePage'
})(ProfilePage)

export default connect(state => ({
}))(ProfilePage)