import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { getTestimonials } from '../../redux/actions/testimonial';
import { getComment } from '../../redux/actions/comment';
import TestimonialModal from '../../components/Testimonial/TestimonialModal';
import PostEntry from '../../components/Testimonial/PostEntry';
import '../../redux/utils/search';


@connect(state => ({
	user: state.user.data,
	testimonial: state.testimonial.data,
	search: state.testimonial.search,
	favorites: state.favorites.data,
	profile: state.profile.data,
}))

@reduxForm({
	form: 'TestimonialPage',
})

export default class TestimonialPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
		};
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getTestimonials());
		dispatch(getComment());
	}

	render() {
		const { user, testimonial, favorites } = this.props;
		return (
			<div id="TestimonialPage">
				<h1>Posts</h1>
				<div className="col-sm-12">
					<div className="input-group">
						<input type="text"
							className="form-control"
							id="search-bar"
							onChange={e => this.setState({searchTerm: e.target.value})}
							placeholder="Search"
							aria-required="true"
							aria-invalid="true"/>
						{user && user.id ? (
							<span className="input-group-addon primary"
								data-toggle="modal"
								data-target="#testimonial-modal">
								<i className="fa fa-plus"></i>
							</span>
						) : (
							<span className="input-group-addon" />
						)}
					</div>
				</div>
				<div id="testimonial-background" className="col-sm-12">
					{testimonial && testimonial
						.mainSearch(this.state.searchTerm)
						.map((entry, i) => (
							<PostEntry key={i}
								author={entry.author}
								message={entry.message}
								profileId={entry.user_id}
								userId={user && user.id ? user.id : null}
								image={entry.image}
								entryId={entry.id}
								detail={false}
								favorites={favorites && user && user.id !== entry.user_id ? favorites.entries : null}
								likes={user && user.id !== entry.user_id ? entry.likes : null}
							/>
						))}
				</div>
				{user && user.id ? <TestimonialModal /> : null}
			</div>
		);
	}

}

