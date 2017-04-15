import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class Header extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="HeaderComponent">
                
            </div>
        )
    }

}

Header = reduxForm({
    form: 'HeaderComponent'
})(Header)

export default connect(state => ({
}))(Header)
