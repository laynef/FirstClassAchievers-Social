import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../redux/utils/ReduxForms'


class SecondaryContact extends Component {

    render() {
        return (
            <div id="SecondaryContact" className="col-md-7">
                <div className="panel panel-default" id="panelSecondary">
                    <div className="panel-heading">
                        <div className="panel-title">
                        About You
                    </div>
                </div>
                <div className="panel-body">
                    <h5>
                        Traditional Standard Style
                    </h5>
                    <Form role="form">
                        <Field component={renderInput} label="First Name" type="text" name="first_name"/>
                        <Field component={renderInput} label="Nick Name" type="text" name="nick_name"/>
                        <Field component={renderInput} label="Last Name" type="text" name="last_name"/>
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
