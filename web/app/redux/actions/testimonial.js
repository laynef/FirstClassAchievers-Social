import axios from 'axios'
import actionTypes from '../store/actionTypes'
import settings from '../config/settings'


export function getTestimonials() {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_TESTIMONIAL_PENDING})
		axios.get(`${settings.API_ROOT}/api/testify`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_TESTIMONIAL_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.GET_TESTIMONIAL_ERROR,
						payload: err
					})
				})			
	}
}

export function createTestimonials(data) {
	return function(dispatch) {
		dispatch({type: actionTypes.CREATE_TESTIMONIAL_PENDING})
		axios.post(`${settings.API_ROOT}/api/testify`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.CREATE_TESTIMONIAL_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.CREATE_TESTIMONIAL_ERROR,
						payload: err
					})
				})			
	}
}