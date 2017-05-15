import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials } from '../redux/actions/testimonial'
import { setComment, getComment } from '../redux/actions/comment'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'


class MainPage extends Component {

  componentDidMount() {
      const { dispatch } = this.props 
      dispatch(getTestimonials())
  }

  render() {
    const { testimonial, user, profile, dispatch, comments, following } = this.props
    if (!testimonial || !user || !profile || !following) return null
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
                          }, entry.id)) 
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
  comments: state.comments.data,
  profile: state.user.profile,
  user: state.user.data,
  following: state.following.data,
  testimonial: state.testimonial.data
}))(MainPage)