import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PostEntry from '../../components/Testimonial/PostEntry';
import { getFavorites } from '../../redux/actions/favorite';
import '../../redux/utils/search';


@connect(state => ({
	testimonial: state.testimonial.data,
	favorites: state.favorites.data,
	user: state.user.data,
}))

@reduxForm({
	form: 'FavoritesPage',
})

export default class FavoritesPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
		};
	}

	componentDidMount() {
		const { dispatch, user } = this.props;
		dispatch(getFavorites(user.id));
	}

	render() {
		const { testimonial, favorites, user } = this.props;
		if (!testimonial || !favorites || !user) return null;
		return (
			<div id="FavoritesPage">
				<h1>Favorites</h1>
				<div id="testimonial-background" className="col-sm-12">
					{testimonial
						.filter(e => favorites.entries.includes(e.id))
						.mainSearch(this.state.searchTerm)
						.map((entry, i) => (
							<PostEntry key={i}
								author={entry.author}
								message={entry.message}
								image={entry.image}
								profileId={entry.user_id}
								entryId={entry.id}
								userId={user ? user.id : null}
								favorites={favorites ? favorites.entries : null}
								detail={false}
							/>
						))}
				</div>
			</div>
		);
	}

}

