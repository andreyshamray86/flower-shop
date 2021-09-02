import { addItemToCart, removeItemFromCart } from "../../helpers/cartFuncs";

const initialState = {
    cart: [],
    numberOfItems: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                cart: addItemToCart(state.cart, action.payload),
                numberOfItems: state.numberOfItems + 1
            }
        case 'REMOVE_ITEM':
            return {
                cart: removeItemFromCart(state.cart, action.payload),
                numberOfItems: state.numberOfItems - 1
            }
        default:
            return state;
    }
}

export default cartReducer;