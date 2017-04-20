import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTestimonials } from '../../redux/actions/testimonial'
import TestimonialModal from '../../components/Testimonial/TestimonialModal'


class TestimonialPage extends Component {

    componentDidMount() {
        const { dispatch } = this.props 
        dispatch(getTestimonials())
    }

    render() {
        const { user } = this.props;
        return (
            <div id="TestimonialPage">
                <h1>Real Testimonials</h1>
                <div className="col-sm-12">
                    <div className="input-group">
                        <input type="text" 
                            className="form-control" 
                            id="search-bar" 
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
                    actions
                </div>
                <TestimonialModal />
            </div>
        )
    }

}

TestimonialPage = reduxForm({
    form: 'TestimonialPage'
})(TestimonialPage)

export default connect(state => ({
    user: state.user.data,
    testimonial: state.testimonial.data
}))(TestimonialPage)