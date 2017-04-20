import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { setProfile } from '../../redux/actions/profile'
import Dropzone from 'react-dropzone'


class ProfileImageModal extends Component {

    dropHandler(file) {
		const {dispatch, user} = this.props;
        let body = {};
        body.image = file;
        body.user = user.id;
		dispatch(setProfile(body));
	}

    render() {
        const { handleSubmit } = this.props
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
                                        <Dropzone onDrop={this.dropHandler.bind(this)} multiple={false} className="dropzone-react">
                                            <div className="dropzone-react-message">
                                                <span>Drop image to upload or CLICK</span>
                                            </div>
                                        </Dropzone>
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

ProfileImageModal = reduxForm({
    form: 'ProfileImageModal'
})(ProfileImageModal)

export default connect(state => ({
    user: state.user.data
}))(ProfileImageModal)
