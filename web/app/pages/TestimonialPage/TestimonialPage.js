import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTestimonials } from '../../redux/actions/testimonial'
import TestimonialModal from '../../components/Testimonial/TestimonialModal'
import PostEntry from '../../components/Testimonial/PostEntry'


class TestimonialPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        const { dispatch } = this.props 
        dispatch(getTestimonials())
    }

    render() {
        const { user, testimonial } = this.props;
        if (!testimonial) return null
        let regex = new RegExp(this.state.searchTerm, 'ig')
        return (
            <div id="TestimonialPage">
                <h1>Real Testimonials</h1>
                <div className="col-sm-12">
                    <div className="input-group">
                        <input type="text" 
                            className="form-control" 
                            id="search-bar" 
                            onChange={e => this.setState({searchTerm: e.target.value})}
                            placeholder="Search" 
                            aria-required="true" 
                            aria-invalid="true"/>
                        {user && user.id ? (
                            <span className="input-group-addon primary"
                                data-toggle="modal"
                                data-target="#testimonial-modal">
                                <i className="fa fa-plus"></i>
                            </span>
                        ) : (
                            <span className="input-group-addon" />
                        )}
                    </div>
                </div>
                <div id="testimonial-background" className="col-sm-12">
                    {testimonial
                        .filter(e => regex.test(e.author) || regex.test(e.message))
                        .map((entry, i) => (
                        <PostEntry key={i}
                            author={entry.author}
                            message={entry.message}
                        />
                    ))}
                </div>
                {(user && user.id) ? (<TestimonialModal />) : null}
            </div>
        )
    }

}

TestimonialPage = reduxForm({
    form: 'TestimonialPage'
})(TestimonialPage)

export default connect(state => ({
    user: state.user.data,
    testimonial: state.testimonial.data,
    search: state.testimonial.search
}))(TestimonialPage)