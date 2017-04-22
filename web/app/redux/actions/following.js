import axios from 'axios'
import actionTypes from '../store/actionTypes'
import settings from '../config/settings'


export function login(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING})
		axios.post(`/auth/local/login`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.LOGIN_SUCCESS,
						payload: response.data
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