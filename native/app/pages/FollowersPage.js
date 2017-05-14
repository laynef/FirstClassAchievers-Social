import React, { Component } from 'react'
import { Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'


class FollowersPage extends Component {

    render() {
        const { friends } = this.props
        return (
            <ScrollView>
                {friends.map((e, i) => {
                    let url = e.image.replace(/http/ig, 'https')
                    return (
                    <CardSection>
                        <Image style={{width: 350, height: 350}} source={{uri: url}} />
                    </CardSection>
                )})}
            </ScrollView>
        )
    }
}

FollowersPage = reduxForm({
    form: 'FollowersPage'
})(FollowersPage)

export default connect(state => ({
    friends: state.friends.data
}))(FollowersPage)