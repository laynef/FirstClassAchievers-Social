import actionTypes from "../../config/action-types";


const INITIAL_STATE = {
	loginPending: null,
	loginError: null,
	id: null,
	first_name: null,
	last_name: null,
	email: null,
	token: null,
	profile: {
		active_company: null,
		active_role: null,
		image: null,
		phone_number: null
	}
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {

		case actionTypes.LOGIN_PENDING:
			return Object.assign({}, state, {
				loginPending: true
			});

		case actionTypes.LOGIN_SUCCESS:
			return Object.assign({}, state, action.payload, {
				loginError: null,
				loginPending: null
			});

		case actionTypes.LOGIN_ERROR:
			return Object.assign({}, state, {
				loginError: action.payload,
				loginPending: null
			});

		case actionTypes.SET_ACTIVE_COMPANY:
			return Object.assign({}, state, {
				profile: {
					...state.profile,
					active_company: action.payload.data.active_company
				}
			});

	}
	return state;
}
