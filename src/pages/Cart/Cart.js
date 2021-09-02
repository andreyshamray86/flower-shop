import React from 'react'
import { useSelector } from 'react-redux';

import {CartList} from '../../components';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    return (
        <>
            <CartList cartItems={cartItems}/>
        </>
    )
}

export default Cart;
