import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import { renderInput } from '../../redux/utils/ReduxForms';
import { changePassword } from '../../redux/actions/auth';
import { validate } from '../../redux/validators/changePassword';
import $ from 'jquery';


class ChangePasswordModal extends Component {

	static formSubmit(data) {
		const { dispatch, reset } = this.props;
		dispatch(changePassword(data));
		$('#change-password-modal').modal('hide');
		dispatch(reset('ChangePasswordModal'));
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div id="ChangePasswordModal">
				<div className="modal fade slide-up disable-scroll in" id="change-password-modal">
					<div className="modal-dialog">
						<div className="modal-content-wrapper">
							<div className="modal-content">
								<div className="modal-header clearfix text-left">
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="pg-close fs-14"></i></button>
									<h5><span className="semi-bold">Change Password</span></h5>
									<p className="p-b-10">Change your password</p>
									<div className="modal-body">
										<Form onSubmit={handleSubmit(ChangePasswordModal.formSubmit.bind(this))}>
											<Field component={renderInput} label="Email" type="email" name="email"/>
											<Field component={renderInput} label="Old Password" type="password" name="password"/>
											<Field component={renderInput} label="New Password" type="password" name="newPassword"/>
											<Field component={renderInput} label="Confirm New Password" type="password" name="reNewPassword"/>
											<div className="row">
												<div className="col-sm-4 m-t-10 sm-m-t-10">
													<button type="submit" className="btn btn-primary btn-block m-t-5">Update</button>
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

ChangePasswordModal = reduxForm({
	form: 'ChangePasswordModal',
	validate,
})(ChangePasswordModal);

export default connect(() => ({
}))(ChangePasswordModal);
