import Rx from 'rx'
import { hashHistory } from 'react-router'
import actionTypes from '../store/actionTypes'
import settings from '../config/settings'


export function login(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING})
		Rx.DOM.Request.post(`${settings.API_ROOT}/auth/local/login`, data)
			.subscribe(
				(xhr) => {
					dispatch({
						type: actionTypes.LOGIN_SUCCESS,
						payload: xhr
					})
				},
				(err) => {
					dispatch({
						type: actionTypes.LOGIN_ERROR,
						payload: err
					})
				}
			)			
	}
}

export function logout() {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGOUT_PENDING})
		Rx.DOM.Request.get(`${settings.API_ROOT}/auth/local/logout`)
			.subscribe(
				(xhr) => {
					dispatch({
						type: actionTypes.LOGOUT_SUCCESS,
						payload: xhr
					})
				},
				(err) => {
					dispatch({
						type: actionTypes.LOGOUT_ERROR,
						payload: err
					})
				}
			)
	}
}

export function register(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.REGISTER_PENDING})
		Rx.DOM.Request.post(`${settings.API_ROOT}/auth/local/register`)
			.subscribe(
				(xhr) => {
					dispatch({
						type: actionTypes.REGISTER_SUCCESS,
						payload: xhr
					})
				},
				(err) => {
					dispatch({
						type: actionTypes.REGISTER_ERROR,
						payload: err
					})
				}
			)
	}
}

export function getUser(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_USER_PENDING})
		Rx.DOM.Request.get(`${settings.API_ROOT}/auth/local/user`)
			.subscribe(
				(xhr) => {
					dispatch({
						type: actionTypes.GET_USER_SUCCESS,
						payload: xhr
					})
				},
				(err) => {
					dispatch({
						type: actionTypes.GET_USER_ERROR,
						payload: err
					})
				}
			)
	}
}
