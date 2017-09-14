import axios from 'axios';
import { actionTypes } from '../store/actionTypes';
import { browserHistory } from 'react-router';


export function login(data) {
	return function(dispatch) {
		dispatch({ type: actionTypes.LOGIN_PENDING });
		axios.post(`http://localhost:8325/api/v1/auth/local/login`, data)
			.then(response => {
				dispatch({
					type: actionTypes.LOGIN_SUCCESS,
					payload: response.data,
				});
				browserHistory.push('/');
			})
			.catch(error => {
				dispatch({
					type: actionTypes.LOGIN_ERROR,
					payload: error,
				});
			});
	};
};

export function changePassword(data) {
	return function(dispatch) {
		dispatch({ type: actionTypes.CHANGE_PASSWORD_PENDING });
		axios.patch(`http://localhost:8325/api/v1/auth/local/change/password`, data)
			.then(response => {
				dispatch({
					type: actionTypes.CHANGE_PASSWORD_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				dispatch({
					type: actionTypes.CHANGE_PASSWORD_ERROR,
					payload: error,
				});
			});
	};
};

export function logout() {
	return function(dispatch) {
		dispatch({ type: actionTypes.LOGOUT_PENDING });
		axios.get(`http://localhost:8325/api/v1/auth/local/logout`)
			.then(response => {
				dispatch({
					type: actionTypes.LOGOUT_SUCCESS,
					payload: response.data,
				});
				browserHistory.push('/');
			})
			.catch(error => {
				dispatch({
					type: actionTypes.LOGOUT_ERROR,
					payload: error,
				});
			});
	};
};

export function register(data) {
	return function(dispatch) {
		dispatch({ type: actionTypes.REGISTER_PENDING });
		axios.post(`http://localhost:8325/api/v1/auth/local/register/visitor`, data)
			.then(response => {
				dispatch({
					type: actionTypes.REGISTER_SUCCESS,
					payload: response.data,
				});
				browserHistory.push('/');
			})
			.catch(error => {
				dispatch({
					type: actionTypes.REGISTER_ERROR,
					payload: error,
				});
			});
	};
};

