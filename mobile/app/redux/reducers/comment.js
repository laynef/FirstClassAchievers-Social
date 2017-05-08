import actionTypes from '../store/actionTypes'


const INITIAL_STATE = {
	pending: null,
	error: null,
	data: null
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case actionTypes.GET_COMMENT_PENDING:
			return {
				...state,
				pending: true,
				error: null
			}

		case actionTypes.GET_COMMENT_SUCCESS:
			return {
				...state,
				pending: null,
				error: null,
				data: action.payload
			}

		case actionTypes.GET_COMMENT_ERROR:
			return {
				...state,
				pending: null,
				error: action.payload
			}

        case actionTypes.SET_COMMENT_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }

        case actionTypes.SET_COMMENT_SUCCESS:
            return {
                ...state,
                pending: null,
                error: null,
                data: action.payload
            }

        case actionTypes.SET_COMMENT_ERROR:
            return {
                ...state,
                pending: null,
                error: action.payload
            }

        case actionTypes.UPDATE_COMMENT_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }

        case actionTypes.UPDATE_COMMENT_SUCCESS:
            return {
                ...state,
                pending: null,
                error: null,
                data: action.payload
            }

        case actionTypes.UPDATE_COMMENT_ERROR:
            return {
                ...state,
                pending: null,
                error: action.payload
            }
        
        case actionTypes.SINGLE_GET_COMMENT_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }

        case actionTypes.SINGLE_GET_COMMENT_SUCCESS:
            return {
                ...state,
                pending: null,
                error: null,
                single: action.payload
            }

        case actionTypes.SINGLE_GET_COMMENT_ERROR:
            return {
                ...state,
                pending: null,
                error: action.payload
            }
        
    
    }

	return state
}

