import axios from 'axios'
import actionTypes from '../store/actionTypes'


export function getComment(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_COMMENT_PENDING})
		axios.get(`/api/comments`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_COMMENT_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.GET_COMMENT_ERROR,
						payload: err
					})
				})			
	}
}

export function setComment(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_COMMENT_PENDING})
		axios.post(`/api/comments/${id}`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.SET_COMMENT_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.SET_COMMENT_ERROR,
						payload: err
					})
				})			
	}
}

export function likeComment(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.UPDATE_COMMENT_PENDING})
		axios.patch(`/api/like/comment/${id}`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.UPDATE_COMMENT_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.UPDATE_COMMENT_ERROR,
						payload: err
					})
				})			
	}
}