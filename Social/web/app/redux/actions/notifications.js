import axios from 'axios'
import actionTypes from '../store/actionTypes'


export function getNotifications(userId) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_NOTIFICATIONS_PENDING})
		axios.get(`/api/notify/${userId}/`)
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

export function setNotifications(id, userId) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_NOTIFICATIONS_PENDING})
		axios.patch(`/api/notify/${userId}/`, {id: id})
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

