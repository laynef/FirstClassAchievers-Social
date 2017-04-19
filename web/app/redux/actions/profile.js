import axios from 'axios'
import actionTypes from '../store/actionTypes'
import settings from '../config/settings'


export function setProfile(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING})
		axios.patch(`${settings.API_ROOT}/api/profile`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.LOGIN_SUCCESS,
						payload: response
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.LOGIN_ERROR,
						payload: err
					})
				})			
	}
}

export function getProfile() {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING})
		axios.get(`${settings.API_ROOT}/api/profile`)
			.then((response) => {
					dispatch({
						type: actionTypes.LOGIN_SUCCESS,
						payload: response
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.LOGIN_ERROR,
						payload: err
					})
				})			
	}
}