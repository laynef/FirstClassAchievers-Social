import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class SideMenu extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="SideMenuComponent">
                {/* Fill me in */}
            </div>
        )
    }

}

SideMenu = reduxForm({
    form: 'SideMenuComponent'
})(SideMenu)

export default connect(state => ({
}))(SideMenu)
