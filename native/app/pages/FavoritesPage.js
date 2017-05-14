import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { ScrollView, Text, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'


class FavoritesPage extends Component {

  componentDidMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial, favorites } = this.props
    if (!testimonial || !favorites) return null
    return (
      <ScrollView>
            {testimonial
              .filter(e => favorites.entries.includes(e.id))
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
  favorites: state.favorites.data,
  testimonial: state.testimonial.data
}))(FavoritesPage)