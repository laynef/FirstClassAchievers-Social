import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderMessageInput } from '../../redux/utils/ReduxForms'
import { getComment, setComment, likeComment } from '../../redux/actions/comment'
import io from 'socket.io-client'


let socket = io('https://first-class-achievers.herokuapp.com')

class CommentEntry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    formLikesSubmit(id) {
        const { dispatch, user, profile, profileId } = this.props
        let body = {}
        body.user_id = Number(user.id)
        body.author = `${profile.firstName} ${profile.lastName}`
        body.image = profile.image
        body.to = profileId
        dispatch(likeComment(body, id))
        dispatch(getComment())
    }

    onEnterKeyDown() {
        const { dispatch, entryId, user, profile } = this.props
        if (this.state.text == '') return null
        dispatch(setComment({
            message: this.state.text,
            user_id: user.id,
            author: `${profile.firstName} ${profile.lastName}`,
            image: profile.image,
            to: this.props.profileId
        }, entryId)) 
        socket.emit('comment', {
            message: this.state.text,
            user_id: user.id,
            author: `${profile.firstName} ${profile.lastName}`,
            image: profile.image,
            to: this.props.profileId
        }, entryId)
        dispatch(getComment())
        this.setState({text: ''})
    }

    render() {
        const { entryId, comments, user, profile, dispatch, handleSubmit } = this.props
        return (
            <div className="CommentEntry">
            {user && user.id ? (
                <Form onSubmit={handleSubmit(this.onEnterKeyDown.bind(this))}>
                    <div className="col-xs-12 no-padding">
                        <input
                            type="text" 
                            onChange={e => this.setState({text: e.target.value})}
                            className="form-control chat-input" 
                            placeholder="Say something"/>
                            <span type="submit"></span>
                    </div>
                </Form>
                ): null}
                <div style={{maxHeight: '200px', overflow: 'scroll', width: '100%'}}>
                    {comments && comments[entryId] && comments[entryId].map((e, i) => (
                        <div key={i} className="card share col1" data-social="item" style={{width: '100%'}}>
                            <div className="circle" data-toggle="tooltip" title="" data-container="body" data-original-title="Label"></div>
                                <div className="card-header clearfix">
                                    <div className="user-pic">
                                        <img
                                            width="122" height="122" 
                                            data-src-retina={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"} 
                                            data-src={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"} 
                                            src={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"} />
                                    </div>
                                    <h5>{e.author}</h5>
                                    <h6>Created posted
                                        <span className="location semi-bold">
                                            <i className="icon-map"></i> 
                                        </span>
                                    </h6>
                                </div>
                                {(e.likes && user && user.id) ? 
                                    (e.likes.includes(user.id)) ? 
                                    (<a className="likes" onClick={() => this.formLikesSubmit(e.id)} type="submit">{e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes.length == 1 ? `${e.likes.length} Like   `: ''}<i className="fa fa-thumbs-up"></i></a>) 
                                    : (<a className="likes" onClick={() => this.formLikesSubmit(e.id)} type="submit">{e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes.length == 1 ? `${e.likes.length} Like   `: ''}<i className="fa fa-thumbs-o-up"></i></a>)
                                : null}
                            <div className="card-description">
                                <p>{e.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

CommentEntry = reduxForm({
    form: 'CommentEntry'
})(CommentEntry)

export default connect(state => ({
    comments: state.comments.data,
    user: state.user.data,
    profile: state.user.profile
}))(CommentEntry)
