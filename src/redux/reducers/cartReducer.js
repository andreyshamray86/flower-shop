import { addItemToCart, removeItemFromCart, decreaseItemInCart } from "../../helpers/cartFuncs";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                cart: addItemToCart(state.cart, action.payload)
            }
        case 'REMOVE_ITEM':
            return {
                cart: removeItemFromCart(state.cart, action.payload)
            }
        case 'DECREASE_ITEM':
            return {
                cart: decreaseItemInCart(state.cart, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;