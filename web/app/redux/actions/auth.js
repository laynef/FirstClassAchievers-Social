import axios from 'axios'
import actionTypes from '../store/actionTypes'
import settings from '../config/settings'


export function login(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING})
		axios.post(`${settings.API_ROOT}/auth/local/login`, data)
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

export function logout() {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGOUT_PENDING})
		axios.get(`${settings.API_ROOT}/auth/local/logout`)
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
		axios.post(`${settings.API_ROOT}/auth/local/register`, data)
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

export function getUser() {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_USER_PENDING})
		axios.get(`${settings.API_ROOT}/auth/local/user`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_USER_SUCCESS,
						payload: response
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
