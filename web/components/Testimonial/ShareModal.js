import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


@connect(() => ({
}))

@reduxForm({
	form: 'TestimonialModal',
})

export default class TestimonialModal extends Component {

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
											<span className="form-control">{`https://first-class-achievers.herokuapp.com/#/testimonials/${this.props.entryId}`}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
