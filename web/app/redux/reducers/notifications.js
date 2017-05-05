import actionTypes from '../store/actionTypes'


const INITIAL_STATE = {
	pending: null,
	error: null,
	data: null
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
        case actionTypes.GET_NOTIFICATIONS_PENDING:
            return {
                ...state,
                error: null,
                pending: true
            }
        
        case actionTypes.GET_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                error: null,
                pending: null,
                data: action.payload
            }
        
        case actionTypes.GET_NOTIFICATIONS_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: null
            }        

         case actionTypes.SET_NOTIFICATIONS_PENDING:
            return {
                ...state,
                error: null,
                pending: true
            }
        
        case actionTypes.SET_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                error: null,
                pending: null,
                data: action.payload
            }

        case actionTypes.SET_NOTIFICATIONS_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: null
            }

        case actionTypes.CREATE_NOTIFICATIONS_PENDING:
            return {
                ...state,
                error: null,
                pending: true
            }
        
        case actionTypes.CREATE_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                error: null,
                pending: null,
                data: action.payload
            }

        case actionTypes.CREATE_NOTIFICATIONS_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: null
            }
        
    }
    
    return state
}