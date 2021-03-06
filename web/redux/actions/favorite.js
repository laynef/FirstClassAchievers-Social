import axios from 'axios';
import actionTypes from '../store/actionTypes';


export function getFavorites(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_FAVORITES_PENDING});
		axios.get(`http://localhost:8325/api/v1/favorites/${id}`)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_FAVORITES_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.GET_FAVORITES_ERROR,
					payload: err,
				});
			});
	};
}

export function setFavorites(data, id) {
	return function(dispatch) {
		dispatch({type: actionTypes.SET_FAVORITES_PENDING});
		axios.patch(`http://localhost:8325/api/v1/favorites/${id}`, data)
			.then((response) => {
				dispatch({
					type: actionTypes.SET_FAVORITES_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.SET_FAVORITES_ERROR,
					payload: err,
				});
			});
	};
}
