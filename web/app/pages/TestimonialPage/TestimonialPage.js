import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class TestimonialPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="TestimonialPage">
                <h1>Real Testimonials</h1>
            </div>
        )
    }

}

TestimonialPage = reduxForm({
    form: 'TestimonialPage'
})(TestimonialPage)

export default connect(state => ({
}))(TestimonialPage)