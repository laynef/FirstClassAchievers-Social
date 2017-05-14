import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'


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
                    <TouchableOpacity onPress={() => Actions.detail({userId: entry.user_id, type: ActionConst.PUSH})}>
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
  testimonial: state.testimonial.data
}))(MainPage)