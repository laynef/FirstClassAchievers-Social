import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { Link } from 'react-router'
import { setFavorites } from '../../redux/actions/favorite'
import { getComment } from '../../redux/actions/comment'
import { likeTestimonial } from '../../redux/actions/testimonial'
import { renderMessageInput } from '../../redux/utils/ReduxForms'
import pull from 'lodash/pull'
import CommentEntry from './CommentEntry'


class PostEntry extends Component {

    formSubmit() {
        const { dispatch, favorites, entryId, userId } = this.props
        let body = {}
        let array = favorites.slice()
        array.includes(entryId) ? pull(array, entryId) : array.push(entryId)
        body.user_id = userId
        body.entries = array
        dispatch(setFavorites(body, userId))
    }

    formLikesSubmit() {
        const { dispatch, likes, entryId, userId, profile, profileId } = this.props
        let body = {}
        body.user_id = Number(userId)
        body.author = `${profile.firstName} ${profile.lastName}`
        body.image = profile.image
        body.to = profileId
        dispatch(likeTestimonial(body, entryId))
    }

    render() {
        const { author, message, image, 
            profileId, detail, entryId, handleSubmit, 
            favorites, userId, user, likes } = this.props
        return (
            <div className="PostEntry">
                <div className="card share col1" data-social="item" style={{width: '100%'}}>
                    <Link to={detail ? `/testimonials/${entryId}` : `/profile/${profileId}`}>
                        <div className="circle" data-toggle="tooltip" title="" data-container="body" data-original-title="Label"></div>
                            <div className="card-header clearfix">
                                <div className="user-pic">
                                    <img alt={`Profile Image ${profileId}`}
                                        width="122" height="122" 
                                        data-src-retina={image ? image : "http://i.imgur.com/sRbuHxN.png"} 
                                        data-src={image ? image : "http://i.imgur.com/sRbuHxN.png"} 
                                        src={image ? image : "http://i.imgur.com/sRbuHxN.png"} />
                                </div>
                                <h5>{author}</h5>
                                <h6>Created posted
                                    <span className="location semi-bold">
                                        <i className="icon-map"></i> 
                                    </span>
                                </h6>
                            </div>
                        </Link>
                    <div className="card-description">
                        {(favorites && profileId != userId) ? 
                            (favorites.includes(entryId)) ? 
                            (<a onClick={() => this.formSubmit()} type="submit" className={`${likes && likes.length > 0 ? 'fav' : 'no-likes'}`}><i className="fa fa-heart"></i></a>) 
                            : (<a onClick={() => this.formSubmit()} type="submit" className={`${likes && likes.length > 0 ? 'fav' : 'no-likes'}`}><i className="fa fa-heart-o"></i></a>)
                        : null}
                        {(likes) ? 
                            (likes.includes(user.id)) ? 
                            (<a onClick={() => this.formLikesSubmit()} type="submit" className="like">{likes && likes.length > 1 ? `${likes.length} Likes   `: likes && likes.length == 1 ? `${likes.length} Like   `: ''}<i className="fa fa-thumbs-up"></i></a>) 
                            : (<a onClick={() => this.formLikesSubmit()} type="submit" className="like">{likes && likes.length > 1 ? `${likes.length} Likes   `: likes && likes.length == 1 ? `${likes.length} Like   `: ''}<i className="fa fa-thumbs-o-up"></i></a>)
                        : null}
                        <p>{message}</p>
                    </div>
                        {user && user.id ? <CommentEntry profileId={profileId} entryId={entryId} /> : null}
                </div>
            </div>
        )
    }

}

PostEntry = reduxForm({
    form: 'PostEntry'
})(PostEntry)

export default connect(state => ({
    user: state.user.data,
    profile: state.user.profile
}))(PostEntry)