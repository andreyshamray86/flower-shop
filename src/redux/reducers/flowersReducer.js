const initialState = {
    flowers: [],
    item: '',
    isLoading: false,
    error: null
}

const flowersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_FLOWERS_START':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_FLOWERS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                flowers: action.payload
            }
        case 'GET_FLOWERS_FAIL':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case 'FETCH_ITEM':
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

export default flowersReducer;