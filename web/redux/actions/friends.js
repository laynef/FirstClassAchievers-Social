import axios from 'axios';
import actionTypes from '../store/actionTypes';


export function getFriends(id) {
	return function(dispatch) {
		dispatch({type: actionTypes.GET_FRIENDS_PENDING});
		axios.get(`https://still-wildwood-47727.herokuapp.com/api/v1/friends/${id}`)
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
