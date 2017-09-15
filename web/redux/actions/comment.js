import axios from 'axios';
import actionTypes from '../store/actionTypes';


export function getComment() {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_COMMENT_PENDING});
		axios.get(`https://still-wildwood-47727.herokuapp.com/api/v1/comments`)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_COMMENT_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.GET_COMMENT_ERROR,
					payload: err,
				});
			});
	};
}

export function setComment(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_COMMENT_PENDING});
		axios.post(`https://still-wildwood-47727.herokuapp.com/api/v1/comments/${id}`, data)
			.then((response) => {
				dispatch({
					type: actionTypes.SET_COMMENT_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.SET_COMMENT_ERROR,
					payload: err,
				});
			});
	};
}

export function likeComment(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.UPDATE_COMMENT_PENDING});
		axios.patch(`https://still-wildwood-47727.herokuapp.com/api/v1/like/comment/${id}`, data)
			.then((response) => {
				dispatch({
					type: actionTypes.UPDATE_COMMENT_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.UPDATE_COMMENT_ERROR,
					payload: err,
				});
			});
	};
}
