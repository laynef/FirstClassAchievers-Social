import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class FriendsPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="FriendsPage">
                <h1>Friends</h1>
                {/* Fill me in */}
            </div>
        )
    }

}

FriendsPage = reduxForm({
    form: 'FriendsPage'
})(FriendsPage)

export default connect(state => ({
}))(FriendsPage)