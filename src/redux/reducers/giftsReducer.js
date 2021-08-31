const initialState = {
    gifts: [],
    isLoading: false,
    error: null
}

const giftsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_GIFTS_START':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_GIFTS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                gifts: action.payload
            }
        case 'GET_GIFTS_FAIL':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default giftsReducer;