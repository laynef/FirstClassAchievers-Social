import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PostEntry from '../../components/Testimonial/PostEntry'
import { getFollowers } from '../../redux/actions/following'
import { getTestimonials } from '../../redux/actions/testimonial'


class MainPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        const { dispatch, user } = this.props 
        dispatch(getTestimonials())
    }

    render() {
        const { user, testimonial, following, favorites } = this.props
        let regex = new RegExp(this.state.searchTerm, 'igm')
        return (
            <div id="mainPage">
                <h1>Welcome to First Class</h1>
                <div id="mainContainer">
                {user && user.id && 
                    following && following.followers ? (
                    <div className="col-sm-12">
                        <div className="input-group">
                            <input type="text" 
                                className="form-control" 
                                id="search-bar" 
                                onChange={e => this.setState({searchTerm: e.target.value})}
                                placeholder="Search" 
                                aria-required="true" 
                                aria-invalid="true"/>
                                <span className="input-group-addon" />
                            </div>
                            <div id="testimonial-background" className="col-sm-12">
                                {testimonial
                                    .filter(e => following.followers.includes(e.user_id))
                                    .filter(e => regex.test(e.author) 
                                        || regex.test(e.message))
                                    .map((entry, i) => (
                                    <PostEntry key={i}
                                        author={entry.author}
                                        message={entry.message}
                                        image={entry.image}
                                        profileId={entry.user_id}
                                        entryId={entry.id}
                                        userId={user ? user.id : null}
                                        favorites={favorites ? favorites.entries : null}
                                        detail={false}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

MainPage = reduxForm({
    form: 'MainPage'
})(MainPage)

export default connect(state => ({
    user: state.user.data,
    testimonial: state.testimonial.data,
    following: state.following.data,
    favorites: state.favorites.data
}))(MainPage)
