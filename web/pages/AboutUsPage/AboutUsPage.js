import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


@connect(() => ({
}))

@reduxForm({
	form: 'AboutUsPage',
})

export default class AboutUsPage extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {

		};
	}

	render() {
		return (
			<div id="AboutUsPage">
				<h1>About Us</h1>
			</div>
		);
	}

}

