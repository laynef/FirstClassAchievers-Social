import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class Template extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="Template">
                {/* Fill me in */}
            </div>
        )
    }

}

Template = reduxForm({
    form: 'Template'
})(Template)

export default connect(state => ({
}))(Template)
