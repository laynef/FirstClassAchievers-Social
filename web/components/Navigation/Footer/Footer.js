import React, { Component } from 'react';


export default class Footer extends Component {

	render() {
		return (
			<div id="Footer">
				<div className="container-fluid container-fixed-lg footer" style={{marginLeft: '50px'}}>
					<div className="copyright sm-text-center">
						<p className="small no-margin pull-left sm-pull-reset">
							<span className="hint-text">Copyright © 2017 </span>
							<span className="font-montserrat">ManOfTech</span>.
							<span className="hint-text"> All rights reserved. </span>
							<span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> | <a href="#" className="m-l-10">Privacy Policy</a></span>
						</p>
						<p className="small no-margin pull-right sm-pull-reset">
							<a href="#">Hand-crafted</a> <span className="hint-text">&amp; Made with Intellect ®</span>
						</p>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		);
	}

}
