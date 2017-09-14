import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import { renderInput, renderTextArea } from '../../redux/utils/ReduxForms';
import { createTestimonials } from '../../redux/actions/testimonial';
import { getProfile } from '../../redux/actions/profile';
import { validate } from '../../redux/validators/testimonial';
import $ from 'jquery';


@connect(state => ({
	user: state.user.data,
	profile: state.profile.data,
}))

@reduxForm({
	form: 'TestimonialModal',
	validate,
})

export default class TestimonialModal extends Component {

	static formSubmit(data) {
		const { dispatch, reset, profile } = this.props;
		if (data.message || profile) {
			data.firstName = data.firstName || profile.firstName;
			data.lastName = data.lastName || profile.lastName;
			data.userId = profile.user_id;
			data.image = profile.image;
			data.author = data.firstName + ' ' + data.lastName;
			dispatch(createTestimonials(data));
			$('#testimonial-modal').modal('hide');
			dispatch(reset('TestimonialModal'));
		}
	}

	componentDidMount() {
		const { dispatch, user } = this.props;
		dispatch(getProfile(user.id));
	}

	render() {
		const { handleSubmit, profile } = this.props;
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
											{profile && profile.firstName ? (
												<div className="form-group">
													<label>First Name</label>
													<span className="form-control">{profile && profile.firstName}</span>
												</div>
											) : <Field component={renderInput} label="First Name" type="text" name="firstName"/>}
											{profile && profile.lastName ? (
												<div className="form-group">
													<label>Last Name</label>
													<span className="form-control">{profile && profile.lastName}</span>
												</div>
											) : <Field component={renderInput} label="Last Name" type="text" name="lastName"/>}
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
		);
	}

}

