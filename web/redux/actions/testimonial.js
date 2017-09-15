import axios from 'axios';
import actionTypes from '../store/actionTypes';


export function getTestimonials() {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_TESTIMONIAL_PENDING});
		axios.get(`https://still-wildwood-47727.herokuapp.com/api/v1/testify`)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_TESTIMONIAL_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.GET_TESTIMONIAL_ERROR,
					payload: err,
				});
			});
	};
}

export function createTestimonials(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.CREATE_TESTIMONIAL_PENDING});
		axios.post(`https://still-wildwood-47727.herokuapp.com/api/v1/testify`, data)
			.then((response) => {
				dispatch({
					type: actionTypes.CREATE_TESTIMONIAL_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.CREATE_TESTIMONIAL_ERROR,
					payload: err,
				});
			});
	};
}

export function likeTestimonial(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.UPDATE_TESTIMONIAL_PENDING});
		axios.patch(`https://still-wildwood-47727.herokuapp.com/api/v1/like/testify/${id}`, data)
			.then((response) => {
				dispatch({
					type: actionTypes.UPDATE_TESTIMONIAL_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.UPDATE_TESTIMONIAL_ERROR,
					payload: err,
				});
			});
	};
}
