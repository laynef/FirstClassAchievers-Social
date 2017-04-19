import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput, renderTextArea } from '../../redux/utils/ReduxForms'
import { getProfile, setProfile } from '../../redux/actions/profile'


class PrimaryContact extends Component {

    static formSubmit(data) {
        const { dispatch } = this.props
    }

    componentDidMount() {
        const { dispatch, user } = this.props 
        dispatch(getProfile(user.data.id))
    }

    render() {
        const { handleSubmit } = this.props;
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
                                <Field component={renderInput} label="First Name" type="text" name="first_name"/>
                                <Field component={renderInput} label="Nick Name" type="text" name="nick_name"/>
                                <Field component={renderInput} label="Last Name" type="text" name="last_name"/>
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
                            <Field component={renderInput} label="City" type="text" name="city"/>
                            <Field component={renderInput} label="Zip Code" type="text" name="zipCode"/>
                            <Field component={renderInput} label="Position" type="text" name="position"/>
                            <Field component={renderTextArea} label="Goals" type="text" name="goals"/>
                            <h5>Change password</h5>
                            <Field component={renderInput} label="Change Password" type="password" name="password"/>
                            <Field component={renderInput} label="Confirm New Password" type="password" name="rePassword"/>
                            <div className="row">
                                <div className="col-sm-12 m-t-10 sm-m-t-10">
                                    <button type="submit" className="btn btn-primary btn-block m-t-5">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
        )
    }

}

PrimaryContact = reduxForm({
    form: 'PrimaryContact'
})(PrimaryContact)

export default connect(state => ({
    profile: state.profile.data,
    user: state.user.data
}))(PrimaryContact)
