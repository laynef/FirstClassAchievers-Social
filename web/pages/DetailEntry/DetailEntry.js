import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { getTestimonials, likeTestimonial } from '../../redux/actions/testimonial';
import { getComment } from '../../redux/actions/comment';
import { setFavorites } from '../../redux/actions/favorite';
import pull from 'lodash/pull';
import CommentEntry from '../../components/Testimonial/CommentEntry';


@connect(state => ({
	testimonial: state.testimonial.data,
	user: state.user.data,
	favorites: state.favorites.data,
	profile: state.profile.data,
	userProfile: state.user.profile,
}))

@reduxForm({
	form: 'DetailEntry',
})

export default class DetailEntry extends Component {

	formSubmit() {
		const { dispatch, favorites, user, params } = this.props;
		if (favorites && user && params) {
			let body = {};
			let array = favorites.entries.slice();
			if (array.includes(params.entryId)) {
				pull(array, params.entryId);
			} else {
				array.push(params.entryId);
			}
			body.user_id = user.id;
			body.entries = array;
			dispatch(setFavorites(body, user.id));
		}
	}

	formLikesSubmit() {
		const { dispatch, user, profile, userProfile, params } = this.props;
		if (userProfile && user && params && profile) {
			let body = {};
			body.user_id = Number(user.id);
			body.author = `${userProfile.firstName} ${userProfile.lastName}`;
			body.image = userProfile.image;
			body.to = profile.user_id;
			dispatch(likeTestimonial(body, params.entryId));
			dispatch(getTestimonials());
		}
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getComment());
		dispatch(getTestimonials());
	}

	render() {
		const { testimonial, params, user, favorites, profile } = this.props;
		return (
			<div id="DetailEntry">
				<h1>{profile && profile.firstName && profile.lastName ? `${profile.firstName} ${profile.lastName}'s Post` : 'Their Post'}</h1>
				{testimonial && params && profile && testimonial
					.filter(e => Number(e.id) === Number(params.entryId))
					.map((e, i)=> (
						<div className="PostEntry" key={i}>
							<div className="card bodi share col1" data-social="item" style={{width: '100%'}}>
								<div className="circle" data-toggle="tooltip" title="" data-container="body" data-original-title="Label"></div>
								<div className="card-header clearfix">
									<div className="user-pic">
										<img alt="avatar"
											width="122" height="122"
											data-src-retina={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"}
											data-src={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"}
											src={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"} />
									</div>
									<h5>{e.author}</h5>
									<h6>Created posted
										<span className="location semi-bold">
											<i className="icon-map"></i>
										</span>
									</h6>
								</div>
								{(favorites && user && e.user_id !== user.id) ?
									(favorites.entries.includes(e.id)) ?
										(<a onClick={() => this.formSubmit()} type="submit" className={`${e.likes && e.likes.length > 0 ? 'fav' : 'no-likes'}`}><i className="fa fa-heart"></i></a>)
										: (<a onClick={() => this.formSubmit()} type="submit" className={`${e.likes && e.likes.length > 0 ? 'fav' : 'no-likes'}`}><i className="fa fa-heart-o"></i></a>)
									: null}
								{(user && user.id && e.likes) ?
									(e.likes.includes(user.id)) ?
										(<a onClick={() => this.formLikesSubmit()} type="submit" className="like">{e.likes && e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes && e.likes.length === 1 ? `${e.likes.length} Like   `: ''}<i className="fa fa-thumbs-up"></i></a>)
										: (<a onClick={() => this.formLikesSubmit()} type="submit" className="like">{e.likes && e.likes.length > 1 ? `${e.likes.length} Likes   `: e.likes && e.likes.length === 1 ? `${e.likes.length} Like   `: ''}<i className="fa fa-thumbs-o-up"></i></a>)
									: null}
								<div className="card-description">
									<p>{e.message}</p>
								</div>
								<CommentEntry profileId={profile.user_id} entryId={params.entryId} />
							</div>
						</div>
					))}
			</div>
		);
	}

}

