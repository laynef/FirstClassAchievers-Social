import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


@connect(() => ({
}))

@reduxForm({
	form: 'NotFoundPage',
})

export default class NotFoundPage extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div id="NotFoundPage">
				<h1>NotFoundPage</h1>
				{/* Fill me in */}
			</div>
		);
	}

}
