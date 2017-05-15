import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { setProfile } from '../redux/actions/profile'
import { ScrollView, Text, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail, ProfilePic } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'


class ProfilePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            nickname: '',
            lastName: ''
        }
    }

  render() {
    const { profile, dispatch } = this.props
    return (
      <ScrollView>
        <ProfilePic image={profile.image} />
        <Card>
            <CardSection>
                <Input 
                    label="First Name"
                    onChangeText={firstName => this.setState({firstName})}
                    placeholder={profile.firstName}
                />
            </CardSection>
            <CardSection>
                <Input 
                    label="Nick Name"
                    onChangeText={nickname => this.setState({nickname})}
                    placeholder={profile.nickname}
                />
            </CardSection>
            <CardSection>
                <Input 
                    label="Last Name"
                    onChangeText={lastName => this.setState({lastName})}
                    placeholder={profile.lastName}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => dispatch(setProfile({
                        firstName : firstName || profile.firstName,
                        lastName : lastName || profile.lastName,
                        nickname : nickname || profile.nickname,
                        city : city || profile.city,
                        state : state || profile.state,
                        country : country || profile.country,
                        zipCode : zipCode || profile.zipCode,
                        position : position || profile.position,
                        goals : goals || profile.goals
                }, profile.user_id))}>Submit</Button>
            </CardSection>
            <CardSection>
                <Button onPress={() => Actions.changePassword({type: ActionConst.PUSH})}>Change Password</Button>
            </CardSection>
        </Card>
      </ScrollView>
    )
  }
}

export default connect(state => ({
  profile: state.user.profile
}))(ProfilePage)