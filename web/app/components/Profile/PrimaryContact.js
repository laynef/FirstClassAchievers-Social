import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, Form } from 'redux-form'
import { renderInput } from '../../redux/utils/ReduxForms'


class PrimaryContact extends Component {

    render() {
        return (
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

PrimaryContact = reduxForm({
    form: 'PrimaryContact'
})(PrimaryContact)

export default connect(state => ({
}))(PrimaryContact)
