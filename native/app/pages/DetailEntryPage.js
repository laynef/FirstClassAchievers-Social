import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { getProfile } from '../redux/actions/profile'
import { getFollowers } from '../redux/actions/following'
import { ScrollView, Text, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail, ProfilePic } from '../commons/index'


class DetailEntryPage extends Component {

  render() {
    const { testimonial, entryId } = this.props
    if (!testimonial) return null
    return (
      <ScrollView>
        {testimonial
              .filter(e => e.id == entryId)
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
}))(DetailEntryPage)