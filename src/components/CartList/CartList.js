import React from 'react'
import { Link } from 'react-router-dom';

import { countTotal } from '../../helpers/cartFuncs';

import {CartItem} from '../../components'

import 
    {CartListStyled, 
    CartTitleStyled, 
    CartTotalStyled,
    ButtonWrap, 
    BtnStyled} from './CartList.styles';

const CartList = ({cartItems}) => {

    const total = countTotal(cartItems);

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
            <CartTotalStyled>Total: ${total}</CartTotalStyled>
            <ButtonWrap>
                <Link to='/flowers'><BtnStyled>Continue shopping</BtnStyled></Link>
                <Link to='/checkout'><BtnStyled>Proceed to checkout</BtnStyled></Link>
            </ButtonWrap>
        </>
    )
}

export default CartList;
