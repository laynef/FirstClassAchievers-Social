import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


class AboutUsPage extends Component {

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

AboutUsPage = reduxForm({
	form: 'AboutUsPage',
})(AboutUsPage);

export default connect(() => ({
}))(AboutUsPage);
