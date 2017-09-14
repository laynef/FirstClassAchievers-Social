import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Header from '../../components/Navigation/Header/Header';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';
import Footer from '../../components/Navigation/Footer/Footer';


class MasterPage extends Component {

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

MasterPage = reduxForm({
	form: 'MasterPage',
})(MasterPage);

export default connect(() => ({
}))(MasterPage);
