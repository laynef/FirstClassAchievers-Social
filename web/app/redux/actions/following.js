import axios from 'axios'
import actionTypes from '../store/actionTypes'
import settings from '../config/settings'


export function getFollowers(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_FOLLOWERS_PENDING})
		axios.get(`/api/following/${id}`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_FOLLOWERS_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.GET_FOLLOWERS_ERROR,
						payload: err
					})
				})			
	}
}

export function setFollowers(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_FOLLOWERS_PENDING})
		axios.post(`/api/following/${id}`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.SET_FOLLOWERS_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.SET_FOLLOWERS_ERROR,
						payload: err
					})
				})			
	}
}