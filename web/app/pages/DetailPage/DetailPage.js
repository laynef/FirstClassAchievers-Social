import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { getProfile } from '../../redux/actions/profile'
import { getTestimonials } from '../../redux/actions/testimonial'
import { getFollowers, setFollowers } from '../../redux/actions/following'
import PostEntry from '../../components/Testimonial/PostEntry'
import pull from 'lodash/pull'


class DetailPage extends Component {

    componentDidMount() {
        const { dispatch, params, user } = this.props 
        dispatch(getProfile(params.userId))
        dispatch(getTestimonials())
        if (user) {
            dispatch(getFollowers(user.id))
        }
    }

    static formSubmit() {
        const { dispatch, following, user, profile } = this.props
        let body = {};
        let array = following.followers.slice()
        if (array.includes(profile.user_id)) {
             pull(array, profile.user_id)
        } else {
            array.push(profile.user_id)
        }
        body.followers = array
        dispatch(setFollowers(body, user.id))
    }

    render() {
        const { profile, params, testimonial, handleSubmit, user, following, favorites } = this.props;
        if (!profile) return null
        if (user) { if (!following || !favorites) return null }
        if (profile.user_id != params.userId) return null
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
                                    {(user && params.userId != user.id) ? 
                                        following.followers.includes(profile.user_id) ? (
                                            <div className="row">
                                                <div className="col-sm-12 m-t-10 sm-m-t-10">
                                                    <button type="submit" className="btn btn-complete btn-block m-t-5">Unfollow</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="row">
                                                <div className="col-sm-12 m-t-10 sm-m-t-10">
                                                    <button type="submit" className="btn btn-complete btn-block m-t-5">Follow</button>
                                                </div>
                                            </div>
                                        )
                                     : null }
                                </div>
                            </div>
                        </div>
                    </Form>
                    <div id="SecondaryContact" className="col-sm-8">
                        {testimonial
                            .filter(e => e.user_id == profile.user_id)
                            .map((entry, i) => (
                            <PostEntry key={i}
                                author={entry.author}
                                message={entry.message}
                                image={entry.image}
                                profileId={entry.user_id}
                                entryId={entry.id}
                                userId={user ? user.id : null}
                                favorites={favorites && user.id != profile.user_id ? favorites.entries : null}
                                detail={true}
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
    testimonial: state.testimonial.data,
    following: state.following.data,
    favorites: state.favorites.data
}))(DetailPage)