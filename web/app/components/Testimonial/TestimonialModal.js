import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput, renderTextArea } from '../../redux/utils/ReduxForms'
import { createTestimonials } from '../../redux/actions/testimonial'
import { getProfile } from '../../redux/actions/profile'


class TestimonialModal extends Component {

    static formSubmit(data) {
        const { dispatch, reset, user } = this.props
        if (data.message) {
            data.userId = user.id
            data.author = data.firstName + ' ' + data.lastName
            dispatch(createTestimonials(data))
            $('#testimonial-modal').modal('hide')
            dispatch(reset('TestimonialModal'))
        }
    }

    componentDidMount() {
        const { dispatch, user } = this.props
        dispatch(getProfile(user.id))
    }

    render() {
        const { handleSubmit, profile } = this.props
        let firstName = profile ? profile.firstName : ''
        let lastName = profile ? profile.lastName : ''
        return (
            <div id="TestimonialModalComponent">
                <div className="modal fade slide-up disable-scroll in" id="testimonial-modal">
                    <div className="modal-dialog">
                        <div className="modal-content-wrapper">
                            <div className="modal-content">
                                <div className="modal-header clearfix text-left">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                        <i className="pg-close fs-14"></i>
                                    </button>
                                    <h5>
                                        <span className="semi-bold">Write a testimonial</span>
                                    </h5>
                                    <p className="p-b-10">Help others get jobs</p>
                                    <div className="modal-body">
                                        <Form onSubmit={handleSubmit(TestimonialModal.formSubmit.bind(this))}>
                                            <Field component={renderInput} placeholder={firstName} label="First Name" type="text" name="firstName"/>
                                            <Field component={renderInput} placeholder={lastName} label="Last Name" type="text" name="lastName"/>
                                            <Field component={renderTextArea} label="Message" type="text" name="message"/>
                                            <div className="row">
                                                <div className="col-sm-4 m-t-10 sm-m-t-10">
                                                    <button type="submit" className="btn btn-primary btn-block m-t-5">Add</button>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

TestimonialModal = reduxForm({
    form: 'TestimonialModal'
})(TestimonialModal)

export default connect(state => ({
    user: state.user.data,
    profile: state.profile.data
}))(TestimonialModal)
