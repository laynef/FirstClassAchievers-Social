import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { asyncConnect } from 'redux-async-connect';
import Header from '../../components/Navigation/Header/Header';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';
import Footer from '../../components/Navigation/Footer/Footer';


@asyncConnect([{
	promise: () => {
		const promises = [];
		return Promise.all(promises);
	},
}])

@connect(() => ({
}))

@reduxForm({
	form: 'MasterPage',
})

export default class MasterPage extends Component {

	render() {
		const { children } = this.props;
		return (
			<div className="wholeApp">
				<SideMenu />
				<Header />
				{ children }
				<Footer />
			</div>
		);
	}
}
