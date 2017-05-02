import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Greeting from '../../components/greeting/Greeting'


class MainPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            
        }
    }

    render() {
        return (
            <div id="mainPage">
                <Greeting />
            </div>
        )
    }
}

MainPage = reduxForm({
    form: 'MainPage'
})(MainPage)

export default connect(state => ({
}))(MainPage)