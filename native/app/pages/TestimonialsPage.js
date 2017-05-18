import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials, likeTestimonial } from '../redux/actions/testimonial'
import { setComment, getComment, likeComment } from '../redux/actions/comment'
import { setFavorites } from '../redux/actions/favorite'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'
import pull from 'lodash/pull'


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

  submitTestimonialLikes(id, likes) {
    const { dispatch } = this.props
    likes = likes.includes(id) ? pull(id) : likes.push(id)
    let body = {likes: likes, user_id: id}
    dispatch(likeTestimonial(body, id))
    dispatch(getTestimonials())
  }

  submitCommentLikes(id, likes) {
    const { dispatch } = this.props
    likes = likes.includes(id) ? pull(id) : likes.push(id)
    let body = {likes: likes, user_id: id}
    dispatch(likeComment(body, id))
    dispatch(getComment())
  }

  submitFavorites(id, favorites) {
    const { dispatch } = this.props
    favorites = favorites.includes(id) ? pull(id) : favorites.push(id)
    let body = {entries: favorites, user_id: id}
    dispatch(setFavorites(body, id))
  }

  render() {
    const { testimonial, user, profile, dispatch, comments, following, favorites } = this.props
    if (!testimonial || !user || !profile || !following || !favorites) return null
    return (
      <ScrollView>
            {testimonial
              .map((entry , i) => (
                  <Card key={i}>
                    <TouchableOpacity onPress={() => Actions.detail({userId: entry.user_id, type: ActionConst.PUSH})}>
                        <CardSection>
                            <Thumbnail image={entry.image} />
                            <Text>{entry.author}</Text>
                            <Text>Created By</Text>
                            {entry.likes.includes(entry.id) ? (
                                <TouchableOpacity onPress={() => this.submitTestimonialLikes(entry.likes, user.id)} style={{width: 50, height: 50}}>
                                  <Image source={{uri: 'http://www.clker.com/cliparts/R/U/Y/u/I/M/thumbs-up-icon-blue-hi.png'}} style={{width: 25, height: 25}} />
                                  <Text style={{width: 20, height: 20}}>{entry.likes.length > 1 ? `${entry.likes.length} Likes   `: entry.likes.length == 1 ? `${entry.likes.length} Like   `: ''}</Text>
                                </TouchableOpacity>
                              ) : (
                                <TouchableOpacity onPress={() => this.submitTestimonialLikes(entry.likes, user.id)} style={{width: 50, height: 50}}>
                                  <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/elite-emoticons/512/thumbs-up-512.png'}} style={{width: 25, height: 25}}  />
                                  <Text style={{width: 20, height: 20}}>{entry.likes.length > 1 ? `${entry.likes.length} Likes   `: entry.likes.length == 1 ? `${entry.likes.length} Like   `: ''}</Text>
                                </TouchableOpacity>
                              )}
                              {favorites.entries.includes(entry.id) ? (
                                <TouchableOpacity onPress={() => this.submitFavorites(favorites, user.id)} style={{width: 50, height: 50}}>
                                  <Image source={{uri: 'http://www.endlessicons.com/wp-content/uploads/2013/06/heart-icon.png'}} style={{width: 25, height: 25}}  />
                                </TouchableOpacity>
                              ) : (
                                <TouchableOpacity onPress={() => this.submitFavorites(favorites, user.id)} style={{width: 50, height: 50}}>
                                  <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/feather/96/heart-512.png'}} style={{width: 25, height: 25}}  />
                                </TouchableOpacity>
                              )}
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
                    <ScrollView>
                        {comments && comments[entry.id] && 
                          comments[entry.id].map((e, idx) => (
                          <Card key={`${i} ${idx}`}>
                            <CardSection>
                                <Thumbnail image={e.image} />
                                <Text>{e.author}</Text>
                                <Text>Created By</Text>
                                {e.likes.includes(e.id) ? (
                                  <TouchableOpacity onPress={() => this.submitCommentLikes(e.likes, user.id)}>
                                    <Image source={{uri: 'http://www.clker.com/cliparts/R/U/Y/u/I/M/thumbs-up-icon-blue-hi.png'}} style={{width: 25, height: 25}} />
                                    <Text style={{width: 20, height: 20}} >{e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes.length == 1 ? `${e.likes.length} Like   `: ''}</Text>
                                  </TouchableOpacity>
                                ) : (
                                  <TouchableOpacity onPress={() => this.submitCommentLikes(e.likes, user.id)}>
                                    <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/elite-emoticons/512/thumbs-up-512.png'}} style={{width: 25, height: 25}}  />
                                    <Text style={{width: 20, height: 20}} >{e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes.length == 1 ? `${e.likes.length} Like   `: ''}</Text>
                                  </TouchableOpacity>
                                )}
                            </CardSection>
                          <CardSection>
                              <Text>{e.message}</Text>
                          </CardSection>
                        </Card>
                        ))}
                        </ScrollView>
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
  testimonial: state.testimonial.data,
  favorites: state.favorites.data
}))(TestimonialsPage)