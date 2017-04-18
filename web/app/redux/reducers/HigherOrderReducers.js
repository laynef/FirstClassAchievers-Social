import omit from 'lodash/omit'
import actionTypes from '../store/actionTypes'


const createModelState = () => ({})

export default function createModelReducer(resourceName, INITIAL_STATE=createModelState()) {
    resourceName = resourceName.toUpperCase()

    return (state=INITIAL_STATE, action) => {
        switch (action.type) {
            case actionTypes[`${resourceName}_SUCCESS`]:
                return action.payload || {}

            case actionTypes[`GET_${resourceName}_LIST_SUCCESS`]:
                return action.payload || {}

            case actionTypes[`GET_${resourceName}_SUCCESS`]:
                return {
                    ...state,
                    [action.payload.id]: action.payload
                }

            case actionTypes[`CREATE_${resourceName}_SUCCESS`]:
                return {
                    ...state,
                    [action.payload.id]: action.payload
                }

            case actionTypes[`EDIT_${resourceName}_SUCCESS`]:
                return {
                    ...state,
                    [action.payload.id]: action.payload
                }

            case actionTypes[`DELETE_${resourceName}_SUCCESS`]:
                return omit(state, [action.payload.id])

        }

        return state
    }
}

const createApiState = () => ({
    create: { pending: null, error: null },
    read: { pending: null, error: null },
    show: { pending: null, error: null },
    update: { pending: null, error: null },
    destroy: { pending: null, error: null },
    absolute: { pending: null, error: null }
})

export default function createApiReducer(resourceName, INITIAL_STATE=createApiState()) {
    resourceName = resourceName.toUpperCase()

    return (state=INITIAL_STATE, action) => {
        switch (action.type) {

            case actionTypes[`${resourceName}_PENDING`]:
                return {
                    ...state,
                    absolute: {
                        ...state.absolute,
                        pending: true,
                        error: null
                    }
                }

            case actionTypes[`${resourceName}_ERROR`]:
                return {
                    ...state,
                    absolute: {
                        ...state.absolute,
                        pending: null,
                        error: action.payload
                    }
                }

            case actionTypes[`GET_${resourceName}_LIST_PENDING`]:
                return {
                    ...state,
                    read: {
                        ...state.read,
                        pending: true,
                        error: null
                    }
                }

            case actionTypes[`GET_${resourceName}_LIST_ERROR`]:
                return {
                    ...state,
                    read: {
                        ...state.read,
                        pending: null,
                        error: action.payload
                    }
                }

            case actionTypes[`GET_${resourceName}_LIST_SUCCESS`]:
                return {
                    ...state,
                    read: {
                        ...state.read,
                        pending: null,
                        error: null
                    }
                }

            case actionTypes[`GET_${resourceName}_PENDING`]:
                return {
                    ...state,
                    show: {
                        ...state.show,
                        pending: true,
                        error: null
                    }
                }

            case actionTypes[`GET_${resourceName}_ERROR`]:
                return {
                    ...state,
                    show: {
                        ...state.show,
                        pending: null,
                        error: action.payload
                    }
                }

            case actionTypes[`GET_${resourceName}_SUCCESS`]:
                return {
                    ...state,
                    show: {
                        ...state.show,
                        pending: null,
                        error: null
                    }
                }

            case actionTypes[`CREATE_${resourceName}_PENDING`]:
                return {
                    ...state,
                    create: {
                        ...state.create,
                        pending: true,
                        error: null
                    }
                }

            case actionTypes[`CREATE_${resourceName}_ERROR`]:
                return {
                    ...state,
                    create: {
                        ...state.create,
                        pending: null,
                        error: action.payload
                    }
                }

            case actionTypes[`CREATE_${resourceName}_SUCCESS`]:
                return {
                    ...state,
                    create: {
                        ...state.create,
                        pending: null,
                        error: null
                    }
                }

            case actionTypes[`EDIT_${resourceName}_PENDING`]:
                return {
                    ...state,
                    update: {
                        ...state.update,
                        pending: true,
                        error: null
                    }
                }

            case actionTypes[`EDIT_${resourceName}_ERROR`]:
                return {
                    ...state,
                    update: {
                        ...state.update,
                        pending: null,
                        error: action.payload
                    }
                }

            case actionTypes[`EDIT_${resourceName}_SUCCESS`]:
                return {
                    ...state,
                    update: {
                        ...state.update,
                        pending: null,
                        error: null
                    },
                }

            case actionTypes[`DELETE_${resourceName}_PENDING`]:
                return {
                    ...state,
                    destroy: {
                        ...state.destroy,
                        pending: true,
                        error: null
                    }
                }

            case actionTypes[`DELETE_${resourceName}_ERROR`]:
                return {
                    ...state,
                    destroy: {
                        ...state.destroy,
                        pending: null,
                        error: action.payload
                    }
                }

            case actionTypes[`DELETE_${resourceName}_SUCCESS`]:
                return {
                    ...state,
                    destroy: {
                        ...state.destroy,
                        pending: null,
                        error: null
                    },
                }

        }
        return state
    }
}
