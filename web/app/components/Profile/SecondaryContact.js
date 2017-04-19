import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput, renderTextArea } from '../../redux/utils/ReduxForms'


class SecondaryContact extends Component {

    render() {
        return (
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
                    <Form role="form">
                        <Field component={renderInput} label="City" type="text" name="city"/>
                        <Field component={renderInput} label="Zip Code" type="text" name="zipCode"/>
                        <Field component={renderInput} label="Position" type="text" name="position"/>
                        <Field component={renderTextArea} label="Goals" type="text" name="goals"/>
                    </Form>
                </div>
            </div>
        </div>
        )
    }

}

SecondaryContact = reduxForm({
    form: 'SecondaryContact'
})(SecondaryContact)

export default connect(state => ({
}))(SecondaryContact)
