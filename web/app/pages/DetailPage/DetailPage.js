import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getProfile } from '../../redux/actions/profile'
import { getTestimonials } from '../../redux/actions/testimonial'
import PostEntry from '../../components/Testimonial/PostEntry'


class DetailPage extends Component {

    componentDidMount() {
        const { dispatch, params } = this.props 
        dispatch(getProfile(params.userId))
        dispatch(getTestimonials())
    }

    render() {
        const { profile, params, testimonial } = this.props;
        if (!profile) return null
        return (
            <div id="DetailPage">
                <h1>{profile.firstName + ' ' + profile.lastName + '\'s Profile'}</h1>
                <span id="profileImage" className="thumbnail-wrapper d32 circular inline m-t-5">
                    <img src={profile.image ? profile.image : "theme/assets/img/default-user.png"}
                        alt=""
                        data-src={profile.image ? profile.image : "theme/assets/img/default-user.png"}
                        data-src-retina={profile.image ? profile.image : "theme/assets/img/default-user.png"}
                        width="320"
                        height="320"/>
                </span>
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
                            </div>
                        </div>
                    </div>
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
    profile: state.profile.data,
    testimonial: state.testimonial.data
}))(DetailPage)