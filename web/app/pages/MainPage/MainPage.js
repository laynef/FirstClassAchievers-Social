import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class MainPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            
        }
    }

    render() {
        return (
            <div id="mainPage">
                <h1>Welcome to First Class</h1>
            </div>
        )
    }
}

MainPage = reduxForm({
    form: 'MainPage'
})(MainPage)

export default connect(state => ({
}))(MainPage)
