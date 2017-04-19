import actionTypes from '../store/actionTypes'

const INITIAL_STATE = {
	pending: null,
	error: null,
	data: null
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
        case actionTypes.GET_PROFILE_PENDING:
            return {
                ...state,
                error: null,
                pending: true
            }
        
        case actionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                error: null,
                pending: null,
                data: action.payload
            }
        
        case actionTypes.GET_PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: null
            }        
        
        case actionTypes.SET_PROFILE_PENDING:
            return {
                ...state,
                error: null,
                pending: true
            }
        
        case actionTypes.SET_PROFILE_SUCCESS:
            return {
                ...state,
                error: null,
                pending: null,
                data: action.payload
            }
        
        case actionTypes.SET_PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: null
            }

    }
    
    return state
}