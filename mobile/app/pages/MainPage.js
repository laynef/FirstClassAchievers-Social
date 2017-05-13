import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Container, Content } from 'native-base'
import { getTestimonials } from '../redux/actions/testimonial'
import PostEntry from '../components/PostEntry'


class MainPage extends Component {

  componentDidMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial, following } = this.props
    return (
      <Container>
        <Content>
          {testimonial
             .filter(e => following.followers.includes(e.user_id))
             .map((e, i) => (
                <PostEntry 
                  key={i}
                  image={e.image}
                  author={e.author}
                  message={e.message}
                  likes={e.likes}
                />
            ))}
        </Content>
      </Container>
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