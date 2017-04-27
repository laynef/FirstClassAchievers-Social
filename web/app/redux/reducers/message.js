import actionTypes from '../store/actionTypes'
import io from 'socket.io-client'


let socket = io()

const INITIAL_STATE = {
	pending: null,
	error: null,
	data: null
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
        case actionTypes.GET_MESSAGES_PENDING:
            return {
                ...state,
                error: null,
                pending: true
            }
        
        case actionTypes.GET_MESSAGES_SUCCESS:
            socket.on('message', msg => {
                let payload = action.payload
                payload.push(msg)
                return {
                    ...state,
                    error: null,
                    pending: null,
                    data: payload
                }
            })
            return {
                ...state,
                error: null,
                pending: null,
                data: action.payload
            }
        
        case actionTypes.GET_MESSAGES_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: null
            }        

         case actionTypes.SET_MESSAGES_PENDING:
            return {
                ...state,
                error: null,
                pending: true
            }
        
        case actionTypes.SET_MESSAGES_SUCCESS:
            socket.on('message', msg => {
                let payload = action.payload
                payload.push(msg)
                return {
                    ...state,
                    error: null,
                    pending: null,
                    data: payload
                }
            })
            return {
                ...state,
                error: null,
                pending: null,
                data: action.payload
            }

        case actionTypes.SET_MESSAGES_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: null
            }        

    }
    
    return state
}