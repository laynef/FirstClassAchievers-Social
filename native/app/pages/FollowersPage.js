import React, { Component } from 'react'
import { Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth'
import { getFollowers } from '../redux/actions/following'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'


class FollowersPage extends Component {

    componentWillMount() {
      const { dispatch, user } = this.props 
      dispatch(getFollowers(user.id))
    }

    render() {
        const { friends } = this.props
        return (
            <ScrollView>
                {friends.map((e, i) => {
                    let url = e.image.replace(/http/ig, 'https')
                    return (
                        <TouchableOpacity key={i} onPress={() => Actions.detail({userId: e.user_id, type: ActionConst.PUSH})}>
                            <CardSection>
                                <Image style={{width: 350, height: 350}} source={{uri: url}} />
                            </CardSection>
                        </TouchableOpacity>
                )})}
            </ScrollView>
        )
    }
}

FollowersPage = reduxForm({
    form: 'FollowersPage'
})(FollowersPage)

export default connect(state => ({
    friends: state.friends.data,
    user: state.user.data
}))(FollowersPage)