import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { Link } from 'react-router'
import { setFavorites } from '../../redux/actions/favorite'
import pull from 'lodash/pull'


class PostEntry extends Component {

    submitFavorite() {
        const { dispatch, user, favorites, entryId } = this.props
        let body = {}
        body.entries = favorites.entries.includes(entryId) ?
            pull(favorites.entries, entryId) :            
            favorites.entries.push(entryId)
        dispatch(setFavorites(body, user.id))
    }

    render() {
        const { author, message, image, userId, detail, entryId, handleSubmit, favorites } = this.props
        return (
            <div className="PostEntry">
                <div className="card share col1" data-social="item" style={{width: '100%'}}>
                    <Link to={detail ? `/testimonials/${entryId}` : `/profile/${userId}`}>
                        <div className="circle" data-toggle="tooltip" title="" data-container="body" data-original-title="Label"></div>
                            <div className="card-header clearfix">
                                <div className="user-pic">
                                    <img alt={`Profile Image ${userId}`}
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
                        {favorites ? favorites.entries.includes(entryId) ? 
                            (<button onClick={() => this.submitFavorite()} className="btn"><i className="fa fa-heart-o"></i></button>) 
                            : (<button onClick={() => this.submitFavorite()} className="btn"><i className="fa fa-heart"></i></button>)
                        : null}
                    <div className="card-description">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        )
    }

}

PostEntry = reduxForm({
    form: 'PostEntry'
})(PostEntry)

export default connect(state => ({
    favorites: state.favorites.data,
    user: state.user.data
}))(PostEntry)