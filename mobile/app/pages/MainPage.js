import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { ScrollView, Text, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'


class MainPage extends Component {

  componentDidMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial, following } = this.props
    if (!testimonial || !following) return null
    return (
      <ScrollView>
            {testimonial
              .filter(e => following.followers.includes(e.user_id))
              .map((entry , i) => (
                  <Card key={i}>
                    <CardSection>
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
  testimonial: state.testimonial.data
}))(MainPage)