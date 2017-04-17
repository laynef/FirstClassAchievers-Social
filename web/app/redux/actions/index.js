import axios from "axios";
import {hashHistory} from "react-router";
import actionTypes from "../../config/action-types";
import settings from "../../config/settings";
import {saveUser} from "../../utils/user-roles";


export function login(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.LOGIN_PENDING});
		axios.post(`${settings.API_ROOT}/login`, data)
			.then(response => {
				let user = response.data;
				let activeCompany = response.data.profile.active_company;
				axios.get(`${settings.API_ROOT}/user_roles`, {headers: {Authorization: 'Token ' + user.token}})
					.then(response => {
						saveUser(response, dispatch, user, activeCompany);
						hashHistory.push('/user/profile');
					})
					.catch(() => {
						dispatch(loginError('Error retrieving user roles'));
					});
			})
			.catch(() => {
				dispatch(loginError('The email and password you entered did not match our records'));
			})
	};
}

function loginError(error) {
	return {
		type: actionTypes.LOGIN_ERROR,
		payload: error
	}
}

export function logout() {
	localStorage.removeItem('user');
	return {type: actionTypes.LOGOUT}
}
