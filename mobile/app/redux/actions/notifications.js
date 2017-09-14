import axios from 'axios'
import actionTypes from '../store/actionTypes'


export function getNotifications(userId) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_NOTIFICATIONS_PENDING})
		axios.get(`https://first-class-achievers.herokuapp.com/api/notify/${userId}/`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_NOTIFICATIONS_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.GET_NOTIFICATIONS_ERROR,
						payload: err
					})
				})			
	}
}

export function setNotifications(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_NOTIFICATIONS_PENDING})
		let data = { note_id: id }
		axios.patch(`https://first-class-achievers.herokuapp.com/api/notify/`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.SET_NOTIFICATIONS_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.SET_NOTIFICATIONS_ERROR,
						payload: err
					})
				})			
	}
}
