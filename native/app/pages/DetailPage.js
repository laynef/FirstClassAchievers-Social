import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTestimonials, likeTestimonial } from '../redux/actions/testimonial'
import { setComment, getComment, likeComment } from '../redux/actions/comment'
import { setFavorites } from '../redux/actions/favorite'
import { getProfile } from '../redux/actions/profile'
import { getFollowers, setFollowers } from '../redux/actions/following'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Card, CardSection, Input, Button, Spinner, Thumbnail, ProfilePic } from '../commons/index'
import { Actions, ActionConst } from 'react-native-router-flux'
import pull from 'lodash/pull'


class DetailPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  componentWillMount() {
      const { dispatch, user, userId } = this.props 
      dispatch(getProfile(userId))
      dispatch(getTestimonials())
      if (user) dispatch(getFollowers(user.id))
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

  submit() {
        const { dispatch, following, user, profile } = this.props
        let body = {};
        let array = following.followers.slice()
        if (array.includes(profile.user_id)) {
            pull(array, profile.user_id)
        } else {
            array.push(profile.user_id)
        }
        body.followers = array
        dispatch(setFollowers(body, user.id, profile.user_id))
  }

  render() {
    const { testimonial, user, profile, dispatch, comments, following, favorites } = this.props
    if (!testimonial || !user || !profile || !following || !favorites) return null
    return (
      <ScrollView>
        <ProfilePic image={profile.image} />
        <Card>
            <CardSection>
                <Text>First Name</Text>
                <Text>{profile.firstName}</Text>
            </CardSection>
            <CardSection>
                <Text>Nick Name</Text>
                <Text>{profile.nickname}</Text>
            </CardSection>
            <CardSection>
                <Text>Last Name</Text>
                <Text>{profile.lastName}</Text>
            </CardSection>
            {following.followers.includes(profile.user_id) ? (
                <CardSection>
                    <Button onPress={() => this.submit()}>Unfollow</Button>
                </CardSection>
            ) : (
                <CardSection>
                    <Button onPress={() => this.submit()}>Follow</Button>
                </CardSection>
            )}
        </Card>
        {testimonial
              .filter(e => e.user_id == profile.user_id)
              .map((entry , i) => (
                  <Card key={i}>
                    <TouchableOpacity onPress={() => Actions.detail({entryId: entry.id, type: ActionConst.PUSH})}>
                        <CardSection>
                            <Thumbnail image={entry.image} />
                            <Text>{entry.author}</Text>
                            <Text>Created By</Text>
                            {entry.likes.includes(user.id) ? (
                                <Button onPress={() => this.submitTestimonialLikes(entry.likes, user.id)}>
                                  <Text>{entry.likes.length > 1 ? `${entry.likes.length} Likes   `: entry.likes.length == 1 ? `${entry.likes.length} Like   `: ''}

                                  </Text>
                                </Button>
                              ) : (
                                <Button onPress={() => this.submitTestimonialLikes(entry.likes, user.id)}>
                                  <Text>{entry.likes.length > 1 ? `${entry.likes.length} Likes   `: entry.likes.length == 1 ? `${entry.likes.length} Like   `: ''}

                                  </Text>
                                </Button>
                              )}
                              {favorites.entries.includes(user.id) ? (
                                <Button onPress={() => this.submitFavorites(favorites, user.id)}>

                                </Button>
                              ) : (
                                <Button onPress={() => this.submitFavorites(favorites, user.id)}>

                                </Button>
                              )}
                        </CardSection>
                    </TouchableOpacity>
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
                      <ScrollView>
                        {comments && comments[entry.id] && 
                          comments[entry.id].map((e, idx) => (
                          <Card key={`${i} ${idx}`}>
                            <CardSection>
                                <Thumbnail image={e.image} />
                                <Text>{e.author}</Text>
                                <Text>Created By</Text>
                                {e.likes.includes(user.id) ? (
                                  <Button onPress={() => this.submitCommentLikes(e.likes, user.id)}>
                                    <Text>{e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes.length == 1 ? `${e.likes.length} Like   `: ''}
                                      <Icon name="thumbs-up" size={10}/>
                                    </Text>
                                  </Button>
                                ) : (
                                  <Button onPress={() => this.submitCommentLikes(e.likes, user.id)}>
                                    <Text>{e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes.length == 1 ? `${e.likes.length} Like   `: ''}
                                      <Icon name="thumbs-o-up" size={10}/>
                                    </Text>
                                  </Button>
                                )}
                            </CardSection>
                              <CardSection>
                                  <Text>{entry.message}</Text>
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
  following: state.following.data,
  comments: state.comments.data,
  profile: state.profile.data,
  testimonial: state.testimonial.data,
  favorites: state.favorites.data,
  user: state.user.data
}))(DetailPage)