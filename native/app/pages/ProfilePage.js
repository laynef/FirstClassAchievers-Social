import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { ScrollView, Text, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail, ProfilePic } from '../commons/index'


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
    const { profile } = this.props
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
                <Button>Submit</Button>
            </CardSection>
            <CardSection>
                <Button>Change Password</Button>
            </CardSection>
        </Card>
      </ScrollView>
    )
  }
}

export default connect(state => ({
  profile: state.user.profile
}))(ProfilePage)