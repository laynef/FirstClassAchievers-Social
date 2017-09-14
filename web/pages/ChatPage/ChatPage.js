import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import { getMessages, createMessage, inviteFriends } from '../../redux/actions/message';
import { getProfile } from '../../redux/actions/profile';
import { renderMessageInput } from '../../redux/utils/ReduxForms';
import io from 'socket.io-client';


let socket = io.connect('https://first-class-achievers.herokuapp.com');

@connect((state) => {
	const message = state.messages;
	return {
		messages: message.data,
		pending: message.pending,
		profile: state.profile.data,
		user: state.user.data,
	};})

@reduxForm({
	form: 'ChatPage',
})

export default class ChatPage extends Component {

	componentDidMount() {
		const { dispatch, params } = this.props;
		dispatch(getProfile(Number(params.otherId)));
		dispatch(getMessages(Number(params.userId), Number(params.otherId)));
		socket.on('connect', () => {
			let data = {
				user: params.userId,
				room1: `_${params.userId}-${params.otherId}_`,
				room2: `_${params.otherId}-${params.userId}_`,
			};
			socket.emit('enter', data);
		});
	}

	static formSubmit(data) {
		const { dispatch, params, reset } = this.props;
		this.favoriteOnInit();
		dispatch(createMessage({
			message: data.message,
			user_id: Number(params.userId),
			to: Number(params.otherId),
			roomNameId: `_${params.userId}-${params.otherId}_`,
		}));
		socket.emit('updatechat', Number(params.userId), {
			message: data.message,
			user_id: Number(params.userId),
			to: Number(params.otherId),
			roomNameId: `_${params.userId}-${params.otherId}_`,
		});
		dispatch(reset('ChatPage'));
	}

	favoriteOnInit() {
		const { messages, dispatch, params } = this.props;
		let showing = [];
		if (!messages) {
			showing = localStorage[`to_${params.otherId}`] ? localStorage.getItem(`to_${params.otherId}`) : [];
		} else {
			showing = messages;
		}
		if (showing.length === 0) {
			dispatch(inviteFriends({ friend: Number(params.userId) }, Number(params.otherId)));
		}
	}

	componentWillReceiveProps() {
		const { dispatch, params } = this.props;
		dispatch(getMessages(Number(params.userId), Number(params.otherId)));
		this.renderConversion();
	}

	renderConversion() {
		const { user, profile, messages, params, pending } = this.props;
		let socket = io();
		let array = messages || [];
		if (pending && user && profile && array.length === 0) {
			array = localStorage[`to_${params.otherId}`] ? JSON.parse(localStorage.getItem(`to_${params.otherId}`)) : [];
		} else if (messages) {
			array = messages;
		}
		socket.on('message', (data) => {
			if (data) {
				array.push(data);
			}
		});
		return array
			.map((e, i) => (
				<div key={i} className="message clearfix">
					{user.id === e.user_id ? null :  (
						<div className="profile-img-wrapper m-t-5 inline">
							<img alt="avatar" className="col-top" src={user.id === e.user_id ? null : (profile.image || 'http://i.imgur.com/sRbuHxN.png')} />
						</div>
					)}
					<div className={`chat-bubble from-${user.id === e.user_id ? 'me' : 'them'}`}>
						{e.message}
					</div>
				</div>
			)
			);
	}

	renderTypingBubble(e) {
		const { user, profile } = this.props;
		return (
			<div className="message clearfix">
				{user.id === e.user_id ? null :  (
					<div className="profile-img-wrapper m-t-5 inline">
						<img className="col-top"
							alt="avatar"
							width="30" height="30"
							src={user.id === e.user_id ? null : (profile.image || 'http://i.imgur.com/sRbuHxN.png')}
							data-src={user.id === e.user_id ? null : (profile.image || 'http://i.imgur.com/sRbuHxN.png')}
							data-src-retina={user.id === e.user_id ? null : (profile.image || 'http://i.imgur.com/sRbuHxN.png')}/>
					</div>
				)}
				<div className={`chat-bubble from-${user.id === e.user_id ? 'me' : 'them'}`}>
                    . . .
				</div>
			</div>
		);
	}

	componentWillReceiveProps() {
		this.renderConversion();
	}

	shouldComponentUpdate() {
		let socket = io();
		if (!this.props.messages) return true;
		if (this.props.pending == null) return true;
		socket.on('sendchat', (data) => {
			if (data) {
				this.renderConversion();
				return true;
			}
			return false;
		});
		return false;
	}

	componentWillUpdate() {
		const { dispatch, params } = this.props;
		dispatch(getMessages(Number(params.userId), Number(params.otherId)));
	}

	componentDidUpdate() {
		this.renderConversion();
	}

	componentWillUnmount() {
		const { messages, params } = this.props;
		if (messages.length > 0) {
			localStorage.setItem(`to_${messages[0].to}`, JSON.stringify(messages));
		}
		let data = {
			user: params.userId,
			room1: `_${params.userId}-${params.otherId}_`,
			room2: `_${params.otherId}-${params.userId}_`,
		};
		socket.emit('leaveRoom', data);
	}

	render() {
		const { handleSubmit, profile, params } = this.props;
		if (!profile || profile.user_id !== params.otherId) return null;
		return (
			<div id="ChatPage">
				{/* Fill me in */}
				<h1>Chat</h1>
				<div className="col-md-12 view chat-view bg-white clearfix">
					<Form onSubmit={handleSubmit(ChatPage.formSubmit.bind(this))}>
						<div className="chat-inner innerChat" id="my-conversation">
							{this.renderConversion()}
						</div>
						<div className="b-t b-grey bg-white clearfix p-l-10 p-r-10">
							<div className="row">
								<Field component={renderMessageInput} name="message" />
								<button type="submit" className="btn btn-complete btn-block m-t-5">
                                    Submit
								</button>
							</div>
						</div>
					</Form>
				</div>
			</div>
		);
	}

}

