import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { getTestimonials } from '../redux/actions/testimonial'
import { ScrollView, Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'


class MainPage extends Component {

  componentDidMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial, following } = this.props
    return (
      <ScrollView>
            {testimonial
              .filter(e => following.followers.includes(e.user_id))
              .map((entry , i) => (
                  <Card>
                    <CardSection>
                        <Text>{entry.author}</Text>
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

MainPage = reduxForm({
    form: 'MainPage'
})(MainPage)

export default connect(state => ({
  following: state.following.data,
  testimonial: state.testimonial.data
}))(MainPage)