import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { getProfile } from '../redux/actions/profile'
import { getFollowers, setFollowers } from '../redux/actions/following'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail, ProfilePic } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'
import pull from 'lodash/pull'


class DetailPage extends Component {

  componentWillMount() {
      const { dispatch, user, userId } = this.props 
      dispatch(getProfile(userId))
      dispatch(getTestimonials())
      if (user) dispatch(getFollowers(user.id))
  }

  submit() {
        const { dispatch, following, user, profile } = this.props
        let body = {};
        let array = following.followers.slice()
        if (array.includes(profile.user_id)) {
            pull(array, profile.user_id)
        } else {
            array.push(profile.user_id)
        }
        body.followers = array
        dispatch(setFollowers(body, user.id, profile.user_id))
  }

  render() {
    const { profile, user, testimonial, following } = this.props
    if (!user || !profile || !following || !testimonial) return null
    return (
      <ScrollView>
        <ProfilePic image={profile.image} />
        <Card>
            <CardSection>
                <Text>First Name</Text>
                <Text>{profile.firstName}</Text>
            </CardSection>
            <CardSection>
                <Text>Nick Name</Text>
                <Text>{profile.nickname}</Text>
            </CardSection>
            <CardSection>
                <Text>Last Name</Text>
                <Text>{profile.lastName}</Text>
            </CardSection>
            {following.followers.includes(profile.user_id) ? (
                <CardSection>
                    <Button onPress={() => this.submit()}>Unfollow</Button>
                </CardSection>
            ) : (
                <CardSection>
                    <Button onPress={() => this.submit()}>Follow</Button>
                </CardSection>
            )}
        </Card>
        {testimonial
              .filter(e => e.user_id == profile.user_id)
              .map((entry , i) => (
                  <Card key={i}>
                    <TouchableOpacity onPress={() => Actions.entry({entryId: entry.id, type: ActionConst.PUSH})}>
                        <CardSection>
                            <Thumbnail image={entry.image} />
                            <Text>{entry.author}</Text>
                            <Text>Created By</Text>
                        </CardSection>
                    </TouchableOpacity>
                    <CardSection>
                        <Text>{entry.message}</Text>
                    </CardSection>
                </Card>
              ))}
      </ScrollView>
    )
  }
}

export default connect(state => ({
  following: state.following.data,
  profile: state.profile.data,
  testimonial: state.testimonial.data,
  user: state.user.data
}))(DetailPage)