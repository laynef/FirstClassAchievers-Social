import axios from 'axios'
import { hashHistory } from 'react-router'
import actionTypes from '../store/actionTypes'
import settings from '../config/settings'


export function login(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING})
		axios.post(`${settings.API_ROOT}/auth/local/login`, data)
			.then((resp) => {
					dispatch({
						type: actionTypes.LOGIN_SUCCESS,
						payload: resp
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
			.then((resp) => {
					dispatch({
						type: actionTypes.LOGOUT_SUCCESS,
						payload: resp
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
		axios.post(`${settings.API_ROOT}/auth/local/register`)
			.then((resp) => {
					dispatch({
						type: actionTypes.REGISTER_SUCCESS,
						payload: resp
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.REGISTER_ERROR,
						payload: err
					})
				})
	}
}

export function getUser(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_USER_PENDING})
		axios.get(`${settings.API_ROOT}/auth/local/user`)
			.then((resp) => {
					dispatch({
						type: actionTypes.GET_USER_SUCCESS,
						payload: resp
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
