import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { getProfile } from '../redux/actions/profile'
import { getFollowers } from '../redux/actions/following'
import { ScrollView, Text, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail, ProfilePic } from '../commons/index'


class ProfilePage extends Component {

  componentWillMount() {
      const { dispatch, user, userId } = this.props 
      dispatch(getProfile(userId))
      dispatch(getTestimonials())
      if (user) dispatch(getFollowers(user.id))
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
                    <Button>Unfollow</Button>
                </CardSection>
            ) : (
                <CardSection>
                    <Button>Follow</Button>
                </CardSection>
            )}
        </Card>
        {testimonial
              .filter(e => e.user_id == profile.user_id)
              .map((entry , i) => (
                  <Card key={i}>
                    <CardSection>
                        <Thumbnail image={entry.image} />
                        <Text>{entry.author}</Text>
                        <Text>Created By</Text>
                    </CardSection>
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
}))(ProfilePage)