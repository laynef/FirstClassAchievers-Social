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
                <h1>I like that</h1>
            </div>
        )
    }

}

ProfilePage = reduxForm({
    form: 'ProfilePage'
})(ProfilePage)

export default connect(state => ({
}))(ProfilePage)