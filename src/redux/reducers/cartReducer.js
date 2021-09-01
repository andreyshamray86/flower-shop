const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                cart: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;