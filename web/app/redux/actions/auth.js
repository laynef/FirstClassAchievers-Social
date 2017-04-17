import Rx from 'rx';
import { hashHistory } from 'react-router';
import actionTypes from '../../config/action-types';
import settings from '../../config/settings';


const INITIAL_STATE = {
	LOGGED_IN: null
}

export function login(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING})
		Rx.DOM.Request.post('/local/login', data)
			.subscribe(
				(xhr) => {
					dispatch({
						type: actionTypes.LOGIN_SUCCESS
					})
				},
				(err) => {
					dispatch({
						type: actionTypes.LOGOUT_ERROR
					})
				}
			)			
	}
}

export function logout(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGOUT_PENDING})
		Rx.DOM.Request.get('/local/logout')
			.subscribe(
				(xhr) => {
					dispatch({
						type: actionTypes.LOGOUT_SUCCESS
					})
				},
				(err) => {
					dispatch({
						type: actionTypes.LOGOUT_ERROR
					})
				}
			)
	}
}

export function register(data) {
	return function(dispatch) {

	}
}
