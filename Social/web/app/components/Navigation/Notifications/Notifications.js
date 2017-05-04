import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class Notifications extends Component {

    render() {
        return (
            <div id="Notifications">
                {/* Fill me in */}
            </div>
        )
    }

}

Notifications = reduxForm({
    form: 'Notifications'
})(Notifications)

export default connect(state => ({
}))(Notifications)
