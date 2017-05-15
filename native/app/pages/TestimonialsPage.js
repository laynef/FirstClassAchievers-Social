import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { setComment, getComment } from '../redux/actions/comment'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'


class TestimonialsPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  componentWillMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial, user, profile, dispatch, comments } = this.props
    if (!testimonial || !user || !profile) return null
    return (
      <ScrollView>
            {testimonial
              .map((entry , i) => (
                  <Card key={i}>
                    <TouchableOpacity onPress={() => Actions.detail({userId: user.id, type: ActionConst.PUSH})}>
                        <CardSection>
                            <Thumbnail image={entry.image} />
                            <Text>{entry.author}</Text>
                            <Text>Created By</Text>
                        </CardSection>
                    </TouchableOpacity>
                    <CardSection>
                        <Text>{entry.message}</Text>
                    </CardSection>
                    <CardSection>
                        <Input 
                          placeholder={`Leave a comment...`}
                          autoCorrect={true}
                          onChangeText={message => this.setState({message})}
                        />
                      </CardSection>
                      <CardSection>
                        <Button onPress={() => {dispatch(setComment({
                              message: this.state.message,
                              user_id: user.id,
                              author: `${profile.firstName} ${profile.lastName}`,
                              image: profile.image,
                              to: entry.user_id
                          }, entryId))
                          dispatch(getComment())
                        }}>Send</Button>
                    </CardSection>
                    <CardSection>
                        {comments && comments[entry.id] && 
                          comments[entry.id].map((e, idx) => (
                          <Card key={`${i} ${idx}`}>
                            <CardSection>
                                <Thumbnail image={e.image} />
                                <Text>{e.author}</Text>
                                <Text>Created By</Text>
                            </CardSection>
                          <CardSection>
                              <Text>{e.message}</Text>
                          </CardSection>
                        </Card>
                        ))}
                    </CardSection>
                </Card>
              ))}
      </ScrollView>
    )
  }
}

export default connect(state => ({
  testimonial: state.testimonial.data,
  comments: state.comments.data,
  user: state.user.data,
  profile: state.user.profile
}))(TestimonialsPage)