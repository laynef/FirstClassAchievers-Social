import axios from 'axios'
import actionTypes from '../store/actionTypes'


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

export function forgottenPassword(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.FORGOTTEN_PASSWORD_PENDING})
		axios.post(`/auth/local/forgotten/password`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.FORGOTTEN_PASSWORD_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.FORGOTTEN_PASSWORD_ERROR,
						payload: err
					})
				})			
	}
}

export function logout() {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGOUT_PENDING})
		axios.get(`/auth/local/logout`)
			.then((response) => {
					dispatch({
						type: actionTypes.LOGOUT_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.LOGOUT_ERROR,
						payload: err
					})
				})
	}
}

export function register(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.REGISTER_PENDING})
		axios.post(`/auth/local/register`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.REGISTER_SUCCESS,
						payload: response.data
					})
					dispatch(login(data))
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.REGISTER_ERROR,
						payload: err
					})
				})
	}
}

export function changePassword(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.CHANGE_PASSWORD_PENDING})
		axios.patch(`/auth/local/change/password`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.CHANGE_PASSWORD_SUCCESS,
						payload: response.data
					})
					dispatch(login(response.data))
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.CHANGE_PASSWORD_ERROR,
						payload: err
					})
				})
	}
}

export function getUser(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_USER_PENDING})
		axios.get(`/auth/local/user/${id}`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_USER_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.GET_USER_ERROR,
						payload: err
					})
				})
	}
}
