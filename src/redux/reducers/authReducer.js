const initialState = {
    user: null,
    token: null,
    userId: null,
    isLoading: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_WITH_GOOGLE':
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isLoading: false
            }
        case 'LOGIN_START':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                token: action.token,
                userId: action.userId,
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
                userId: null,
                token: null
            }
        case 'SIGNUP_START':
            return {
                ...state,
                isLoading: true
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case 'SIGNUP_FAIL':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case 'FETCH_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default authReducer;