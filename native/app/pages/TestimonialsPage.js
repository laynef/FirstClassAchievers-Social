import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { ScrollView, Text, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'


class TestimonialsPage extends Component {

  componentDidMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial } = this.props
    if (!testimonial) return null
    return (
      <ScrollView>
            {testimonial
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
  testimonial: state.testimonial.data
}))(TestimonialsPage)