import axios from 'axios'
import actionTypes from '../store/actionTypes'


export function getMessages(userId, otherId) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_MESSAGES_PENDING})
		axios.get(`https://first-class-achievers.herokuapp.com/api/messages/${userId}/${otherId}`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_MESSAGES_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.GET_MESSAGES_ERROR,
						payload: err
					})
				})			
	}
}

export function createMessage(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_MESSAGES_PENDING})
		axios.post(`https://first-class-achievers.herokuapp.com/api/messages`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.SET_MESSAGES_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.SET_MESSAGES_ERROR,
						payload: err
					})
				})			
	}
}

export function inviteFriends(data, id, other) {
	return function(dispatch) {
		dispatch({type: actionTypes.INVITE_FRIEND_PENDING})
		axios.post(`https://first-class-achievers.herokuapp.com/api/invite/${id}`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.INVITE_FRIEND_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.INVITE_FRIEND_ERROR,
						payload: err
					})
				})			
	}
}
