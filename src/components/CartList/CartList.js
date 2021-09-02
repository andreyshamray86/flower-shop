import React from 'react'

import CartItem from '../CartItem/CartItem';

import 
    {CartListStyled, 
    CartTitleStyled, 
    CartTotalStyled,
    ButtonWrap, 
    BtnStyled} from './CartList.styles';

const CartList = ({cartItems}) => {

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const updatedTotal = +total.toFixed(2);

    return (
        <>
            <CartTitleStyled>Cart</CartTitleStyled>
            <CartListStyled>
                <ul className="cartlist">
                    <li className="cartlist__header">
                        <span className="cartlist__header-item">Item</span>
                        <span className="cartlist__header-price">Price</span>
                        <span className="cartlist__header-quantity">Quantity</span>
                        <span className="cartlist__header-total">Total</span>
                    </li>
                    {
                        cartItems.map((item, index) => {
                            return <CartItem item={item} key={index}/>
                        })
                    }
                </ul>
            </CartListStyled>
            <CartTotalStyled>Total: ${updatedTotal}</CartTotalStyled>
            <ButtonWrap>
                <BtnStyled>Continue shopping</BtnStyled>
                <BtnStyled>Proceed to checkout</BtnStyled>
            </ButtonWrap>
        </>
    )
}

export default CartList;
