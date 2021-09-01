const initialState = {
    sortType: 'default'
}

const sortReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'SORT_CHANGE':
        return {
            sortType: action.payload
        }
        default:
            return state;
    }
}

export default sortReducer;