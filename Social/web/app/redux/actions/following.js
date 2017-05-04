import axios from 'axios'
import actionTypes from '../store/actionTypes'
import { getFriends } from './friends'


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

export function setFollowers(data, id, other) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_FOLLOWERS_PENDING})
		axios.patch(`/api/following/${id}/${other}`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.SET_FOLLOWERS_SUCCESS,
						payload: response.data
					})
					dispatch(getFriends(id))
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.SET_FOLLOWERS_ERROR,
						payload: err
					})
				})			
	}
}