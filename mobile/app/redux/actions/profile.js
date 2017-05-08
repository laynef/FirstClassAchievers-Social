import axios from 'axios'
import actionTypes from '../store/actionTypes'
import { getUser } from './auth'
import { getTestimonials } from './testimonial'

export function setProfile(data, id) {
	return function(dispatch) {
		let formData = new FormData()
		dispatch({type: actionTypes.SET_PROFILE_PENDING})
		axios.patch(`https://first-class-achievers.herokuapp.com/api/profile/${id}`, data)
			.then((response) => {
					dispatch({
						type: actionTypes.SET_PROFILE_SUCCESS,
						payload: response.data
					})
					dispatch(getUser(response.data.user_id))
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.SET_PROFILE_ERROR,
						payload: err
					})
				})			
	}
}

export function getProfile(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_PROFILE_PENDING})
		axios.get(`https://first-class-achievers.herokuapp.com/api/profile/${id}`)
			.then((response) => {
					dispatch({
						type: actionTypes.GET_PROFILE_SUCCESS,
						payload: response.data
					})
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.GET_PROFILE_ERROR,
						payload: err
					})
				})			
	}
}

export function setImage(data, id) {
	return function(dispatch) {
		// let body = new FormData()
		// body.append('image', data)
		dispatch({type: actionTypes.SET_IMAGE_PENDING})
		axios.patch(`https://first-class-achievers.herokuapp.com/api/image/${id}`, body)
			.then((response) => {
					dispatch({
						type: actionTypes.SET_IMAGE_SUCCESS,
						payload: response.data
					})
					dispatch(getProfile(id))
					dispatch(getUser(id))
					dispatch(getTestimonials())
				})
				.catch((err) => {
					dispatch({
						type: actionTypes.SET_IMAGE_ERROR,
						payload: err
					})
				})			
	}
}