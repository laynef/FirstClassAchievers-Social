import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import Header from '../components/Navigation/Header/Header'
// import LoginModal from '../components/Navigation/Header/LoginModal'
// import SignUpModal from '../components/Navigation/Header/SignUpModal'
import SideMenu from '../components/Navigation/SideMenu/SideMenu'


class MasterPage extends Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                <SideMenu />
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
