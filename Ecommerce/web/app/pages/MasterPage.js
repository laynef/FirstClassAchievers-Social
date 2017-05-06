import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import TopBar from '../components/Header/TopBar'


class MasterPage extends Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <TopBar />
                { children }
            </div>
        )
    }
}

MasterPage = reduxForm({
    form: 'MasterPage'
})(MasterPage)

export default connect(state => ({
}))(MasterPage)