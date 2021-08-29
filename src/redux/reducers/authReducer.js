const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CURRENT_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN_WITH_GOOGLE':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case 'LOGIN_START':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default authReducer;