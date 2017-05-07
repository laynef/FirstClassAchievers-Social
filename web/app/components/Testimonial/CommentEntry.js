import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderMessageInput } from '../../redux/utils/ReduxForms'
import { getComment, setComment } from '../../redux/actions/comment'


class CommentEntry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        const { entryId, comments, user, profile, dispatch } = this.props
        return (
            <div className="CommentEntry">
                <form onSubmit={() => {dispatch(setComment({
                            message: this.state.text,
                            user_id: user.id,
                            author: `${profile.firstName} ${profile.lastName}`,
                            image: profile.image
                        }, entryId)); 
                        dispatch(getComment()); 
                        this.setState({text: ''})}}>
                    <div className="col-xs-12 no-padding">
                        <input
                            type="text" 
                            onChange={(e) => this.setState({text: e.target.value})}
                            className="form-control chat-input" 
                            placeholder="Say something"/>
                        <button type="submit" className="btn btn-block btn-success">Submit</button>
                    </div>
                </form>
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
