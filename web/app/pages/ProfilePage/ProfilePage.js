import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class ProfilePage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="ProfilePage">
                <h1>My Profile</h1>
                <span id="profileImage" className="thumbnail-wrapper d32 circular inline m-t-5">
                    <img src="theme/assets/img/profiles/fine.jpg" 
                                alt="" 
                                data-src="theme/assets/img/profiles/fine.jpg" 
                                data-src-retina="theme/assets/img/profiles/fine.jpg" 
                                width="320" 
                                height="320"/>
                </span>
            </div>
        )
    }

}

ProfilePage = reduxForm({
    form: 'ProfilePage'
})(ProfilePage)

export default connect(state => ({
}))(ProfilePage)