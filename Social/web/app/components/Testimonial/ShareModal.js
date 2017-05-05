import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class TestimonialModal extends Component {

    render() {
        return (
            <div id="ShareModalComponent">
                <div className="modal fade slide-up disable-scroll in" id="share-modal">
                    <div className="modal-dialog">
                        <div className="modal-content-wrapper">
                            <div className="modal-content">
                                <div className="modal-header clearfix text-left">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                        <i className="pg-close fs-14"></i>
                                    </button>
                                    <h5>
                                        <span className="semi-bold">Share this testimonial</span>
                                    </h5>
                                    <p className="p-b-10">Show others this entry</p>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Share Link</label>
                                            <span className="form-control">{`http://localhost:3214/#/testimonials/${this.props.entryId}`}</span>
                                        </div>
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
}))(TestimonialModal)
