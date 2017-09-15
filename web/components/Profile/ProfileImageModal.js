import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { setImage } from '../../redux/actions/profile';
import Dropzone from 'react-dropzone';


@connect(state => ({
	user: state.user.data,
}))

@reduxForm({
	form: 'ProfileImageModal',
})

export default class ProfileImageModal extends Component {

	onDrop(file) {
		const { dispatch, user } = this.props;
		dispatch(setImage(file[0], user.id));
	}

	render() {
		return (
			<div id="ProfileImageModal">
				<div className="modal fade slide-up disable-scroll in" id="profile-image-modal">
					<div className="modal-dialog">
						<div className="modal-content-wrapper">
							<div className="modal-content">
								<div className="modal-header clearfix text-left">
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="pg-close fs-14"></i></button>
									<h5><span className="semi-bold">Profile Image</span></h5>
									<div className="modal-body">
										<Dropzone onDrop={this.onDrop.bind(this)} multiple={false} className="dropzone" activeClassName="active-dropzone">
											<div className="dropzone-react-message">
												<span>Drop image to upload or CLICK</span>
												<img src="http://i.imgur.com/u81HFsO.png"
													data-src="http://i.imgur.com/u81HFsO.png"
													alt=""
													data-src-retina="http://i.imgur.com/u81HFsO.png"
												/>
											</div>
										</Dropzone>
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

