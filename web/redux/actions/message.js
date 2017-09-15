import axios from 'axios';
import actionTypes from '../store/actionTypes';


export function getMessages(userId, otherId) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_MESSAGES_PENDING});
		axios.get(`${process.env.PROXIMO_URL}/api/v1/messages/${userId}/${otherId}`)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_MESSAGES_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.GET_MESSAGES_ERROR,
					payload: err,
				});
			});
	};
}

export function createMessage(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_MESSAGES_PENDING});
		axios.post(`${process.env.PROXIMO_URL}/api/v1/messages`, data)
			.then((response) => {
				dispatch({
					type: actionTypes.SET_MESSAGES_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.SET_MESSAGES_ERROR,
					payload: err,
				});
			});
	};
}

export function inviteFriends(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.INVITE_FRIEND_PENDING});
		axios.post(`${process.env.PROXIMO_URL}/api/v1/invite/${id}`, data)
			.then((response) => {
				dispatch({
					type: actionTypes.INVITE_FRIEND_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.INVITE_FRIEND_ERROR,
					payload: err,
				});
			});
	};
}
