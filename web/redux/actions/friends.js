import axios from 'axios';
import actionTypes from '../store/actionTypes';


export function getFriends(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_FRIENDS_PENDING});
		axios.get(`/api/friends/${id}`)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_FRIENDS_SUCCESS,
					payload: response.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.GET_FRIENDS_ERROR,
					payload: err,
				});
			});
	};
}
