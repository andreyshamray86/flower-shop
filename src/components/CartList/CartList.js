import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { removeItem } from '../../redux/actions/cartActions';

import 
    {CartListStyled, 
    CartTitleStyled, 
    CartTotalStyled,
    ButtonWrap, 
    BtnStyled} from './CartList.styles';

import bin from '../../assets/icons/bin.svg';

const CartList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);

    const deleteHandler = (e) => {
        dispatch(removeItem(e.target));
    }

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
                            return (
                                <li className="cartlist__item" key={index}>
                                    <div className="cartlist__item-info">
                                        <img src={item.image} alt="cart item image" />
                                        <div className="textblock">
                                            <h4 className="textblock__title">{item.name}</h4>
                                            <span className="textblock__size">Size: {item.size}</span>
                                            <span className="textblock__delivery">Delivery date: {item.date}</span>
                                        </div>
                                    </div>
                                    <span className="cartlist__item-price">${item.price}</span>
                                    <span className="cartlist__item-quantity">
                                        <span className="minus">-</span>{item.quantity}<span className="plus">+</span>
                                    </span>
                                    <span className="cartlist__item-total">${item.price * item.quantity}
                                        <div className="bin" onClick={deleteHandler}><img src={bin} alt="" /></div>
                                    </span>
                                </li>
                            )
                        })
                    }

                    
                </ul>
            </CartListStyled>
            <CartTotalStyled>Total: $200.99</CartTotalStyled>
            <ButtonWrap>
                <BtnStyled>Continue shopping</BtnStyled>
                <BtnStyled>Proceed to checkout</BtnStyled>
            </ButtonWrap>
        </>
    )
}

export default CartList;
