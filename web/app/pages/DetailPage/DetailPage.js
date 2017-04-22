import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { getProfile } from '../../redux/actions/profile'
import { getTestimonials } from '../../redux/actions/testimonial'
import { getFollowers } from '../../redux/actions/following'
import PostEntry from '../../components/Testimonial/PostEntry'


class DetailPage extends Component {

    componentWillMount() {
        const { user, dispatch } = this.props
        if (user) {
            dispatch(getFollowers(user.id))
        }
    }

    componentDidMount() {
        const { dispatch, params } = this.props 
        dispatch(getProfile(params.userId))
        dispatch(getTestimonials())
    }

    static formSubmit(data) {
        const { dispatch, profile } = this.props
        
    }

    render() {
        const { profile, params, testimonial, handleSubmit } = this.props;
        if (!profile) return null
        return (
            <div id="DetailPage">
                <h1>{profile.firstName + ' ' + profile.lastName + '\'s Profile'}</h1>
                <span id="profileImage" className="thumbnail-wrapper d32 circular inline m-t-5">
                    <img src={profile.image ? profile.image : "http://i.imgur.com/sRbuHxN.png"}
                        alt=""
                        data-src={profile.image ? profile.image : "http://i.imgur.com/sRbuHxN.png"}
                        data-src-retina={profile.image ? profile.image : "http://i.imgur.com/sRbuHxN.png"}
                        width="320"
                        height="320"/>
                </span>
                <Form onSubmit={handleSubmit(DetailPage.formSubmit.bind(this))}>
                    <div id="PrimaryContact" className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    About Them
                                </div>
                            </div>
                            <div className="panel-body">
                                <h5>
                                    Traditional Standard Style
                                </h5>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <span className="form-control">{profile.firstName}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Nick Name</label>
                                        <span className="form-control">{profile.nickname}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <span className="form-control">{profile.lastName}</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 m-t-10 sm-m-t-10">
                                            <button type="submit" className="btn btn-complete btn-block m-t-5">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <div id="SecondaryContact" className="col-sm-8">
                        {testimonial
                            .filter(e => e.user_id == params.userId)
                            .map((entry, i) => (
                            <PostEntry key={i}
                                author={entry.author}
                                message={entry.message}
                                image={entry.image}
                                userId={entry.user_id}
                            />
                        ))}
                </div>
            </div>
        )
    }

}

DetailPage = reduxForm({
    form: 'DetailPage'
})(DetailPage)

export default connect(state => ({
    user: state.user.data,
    profile: state.profile.data,
    testimonial: state.testimonial.data
}))(DetailPage)