import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { Link } from 'react-router'
import { setFavorites } from '../../redux/actions/favorite'
import pull from 'lodash/pull'


class PostEntry extends Component {

    static formSubmit() {
        const { dispatch, favorites, entryId, userId } = this.props
        let body = {}
        let array = favorites.slice()
        if (array.includes(entryId)) {
             pull(array, entryId)
        } else {
            array.push(entryId)
        }
        body.user_id = userId
        body.entries = array
        dispatch(setFavorites(body, userId))
    }

    render() {
        const { author, message, image, profileId, detail, entryId, handleSubmit, favorites, userId } = this.props
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
                        <Form onSubmit={handleSubmit(PostEntry.formSubmit.bind(this))}>
                            {(favorites && profileId != userId)  ? 
                                (favorites.includes(entryId)) ? 
                                (<button type="submit" className="btn"><i className="fa fa-heart"></i></button>) 
                                : (<button type="submit" className="btn"><i className="fa fa-heart-o"></i></button>)
                            : null}
                        </Form>
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
}))(PostEntry)