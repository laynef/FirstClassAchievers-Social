import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { logout } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux'


class Menu extends Component {

    render() {
        const { dispatch } = this.props
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => Actions.home({type: ActionConst.REPLACE})}>
                        <Text>HOME</Text>
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.testimonials({type: ActionConst.REPLACE})}>
                        <Text>TESTIMONIALS</Text>
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.profile({type: ActionConst.REPLACE})}>
                        <Text>PROFILE</Text>
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.favorites({type: ActionConst.REPLACE})}>
                        <Text>FAVORITES</Text>
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.followers({type: ActionConst.REPLACE})}>
                        <Text>FOLLOWERS</Text>
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => {
                        dispatch(logout())
                        Actions.auth({type: ActionConst.REPLACE})
                    }}>
                        <Text>LOGOUT</Text>
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

Menu = reduxForm({
    form: 'Menu'
})(Menu)

export default connect(state => ({
}))(Menu)