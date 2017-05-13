import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Container, Content } from 'native-base'
import { getTestimonials } from '../redux/actions/testimonial'
import PostEntry from '../components/PostEntry'
import { ScrollView } from 'react-native'


class MainPage extends Component {

  componentDidMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial, following } = this.props
    return (
      <ScrollView>
        <Container>
          <Content>
            {testimonial
              .filter(e => following.followers.includes(e.user_id))
              .map((entry , i) => (
                  <PostEntry key={i}
                    image={entry.image}
                    author={entry.author}
                    message={entry.message}
                    likes={entry.likes}
                  />
              ))}
          </Content>
        </Container>
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