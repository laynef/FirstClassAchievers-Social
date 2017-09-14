import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import { renderInput, renderTextArea } from '../../redux/utils/ReduxForms';
import { getProfile, setProfile } from '../../redux/actions/profile';
import ChangePasswordModal from './ChangePasswordModal';


@connect(state => ({
	profile: state.profile.data,
	user: state.user.data,
}))


@reduxForm({
	form: 'PrimaryContact',
})

export default class PrimaryContact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			success: '',
		};
	}

	static formSubmit(data) {
		const { dispatch, user, profile } = this.props;
		data.firstName = data.firstName || profile.firstName;
		data.lastName = data.lastName || profile.lastName;
		data.nickname = data.nickname || profile.nickname;
		data.city = data.city || profile.city;
		data.state = data.state || profile.state;
		data.country = data.country || profile.country;
		data.zipCode = data.zipCode || profile.zipCode;
		data.position = data.position || profile.position;
		data.goals = data.goals || profile.goals;
		dispatch(setProfile(data, user.id));
		this.setState({success: 'Profile Updated'});
	}

	componentDidMount() {
		const { dispatch, user } = this.props;
		dispatch(getProfile(user.id));
	}

	renderSuccess() {
		if (!this.state.success) return null;
		return (
			<span style={{color: 'green'}}>
				{this.state.success}
			</span>
		);
	}

	render() {
		const { handleSubmit, profile } = this.props;
		return (
			<div>
				<Form role="form" onSubmit={handleSubmit(PrimaryContact.formSubmit.bind(this))}>
					<div id="PrimaryContact" className="col-md-4">
						<div className="panel panel-default">
							<div className="panel-heading">
								<div className="panel-title">
                                About You
								</div>
							</div>
							<div className="panel-body">
								<h5>
                                Traditional Standard Style
								</h5>
								<Field component={renderInput} placeholder={profile && profile.firstName ? profile.firstName : ''} label="First Name" type="text" name="firstName"/>
								<Field component={renderInput} placeholder={profile && profile.nickname ? profile.nickname : ''} label="Nick Name" type="text" name="nickname"/>
								<Field component={renderInput} placeholder={profile && profile.lastName ? profile.lastName : ''} label="Last Name" type="text" name="lastName"/>
							</div>
						</div>
					</div>
					<div id="SecondaryContact" className="col-md-7">
						<div className="panel panel-default" id="panelSecondary">
							<div className="panel-heading">
								<div className="panel-title">
                                Contact Info
								</div>
							</div>
							<div className="panel-body">
								<h5>
                                Traditional Standard Style
								</h5>
								<Field component={renderInput} placeholder={profile && profile.city ? profile.city : ''} label="City" type="text" name="city"/>
								<Field component={renderInput} placeholder={profile && profile.state ? profile.state : ''} label="State" type="text" name="state"/>
								<Field component={renderInput} placeholder={profile && profile.country ? profile.country : ''} label="Country" type="text" name="country"/>
								<Field component={renderInput} placeholder={profile && profile.zipCode ? profile.zipCode : ''} label="Zip Code" type="text" name="zipCode"/>
								<Field component={renderInput} placeholder={profile && profile.position ? profile.position : ''} label="Position" type="text" name="position"/>
								<Field component={renderTextArea} placeholder={profile && profile.goals ? profile.goals : ''} label="Goals" type="text" name="goals"/>
								<div className="row">
									<div className="col-sm-12 m-t-10 sm-m-t-10">
										<button type="submit" className="btn btn-primary btn-block m-t-5">Submit</button>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12 m-t-10 sm-m-t-10">
										<button type="button"
											className="btn btn-primary btn-block m-t-5"
											data-toggle="modal"
											data-target="#change-password-modal">
                                        Change Password
										</button>
									</div>
								</div>
								{this.renderSuccess()}
							</div>
						</div>
					</div>
				</Form>
				<ChangePasswordModal />
			</div>
		);
	}

}

