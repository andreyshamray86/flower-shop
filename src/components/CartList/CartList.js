import React from 'react'

import 
    {CartListStyled, 
    CartTitleStyled, 
    CartTotalStyled,
    ButtonWrap, 
    BtnStyled} from './CartList.styles';

import flower from '../../assets/images/flowers11.png'
import bin from '../../assets/icons/bin.svg';

const CartList = () => {
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
                    <li className="cartlist__item">
                        <div className="cartlist__item-info">
                            <img src={flower} alt="" />
                            <div className="textblock">
                                <h4 className="textblock__title">Super Flowers</h4>
                                <span className="textblock__size">Size: Regular</span>
                                <span className="textblock__delivery">Delivery date: 29.08.2021</span>
                            </div>
                        </div>
                        <span className="cartlist__item-price">$20.99</span>
                        <span className="cartlist__item-quantity">
                            <span className="minus">-</span>1<span className="plus">+</span>
                        </span>
                        <span className="cartlist__item-total">$20.99
                            <div className="bin"><img src={bin} alt="" /></div>
                        </span>
                    </li>
                    <li className="cartlist__item">
                        <div className="cartlist__item-info">
                            <img src={flower} alt="" />
                            <div className="textblock">
                                <h4 className="textblock__title">Super Flowers</h4>
                                <span className="textblock__size">Size: Regular</span>
                                <span className="textblock__delivery">Delivery date: 29.08.2021</span>
                            </div>
                        </div>
                        <span className="cartlist__item-price">$20.99</span>
                        <span className="cartlist__item-quantity">
                            <span className="minus">-</span>1<span className="plus">+</span>
                        </span>
                        <span className="cartlist__item-total">$20.99
                            <div className="bin"><img src={bin} alt="" /></div>
                        </span>
                    </li>
                    <li className="cartlist__item">
                        <div className="cartlist__item-info">
                            <img src={flower} alt="" />
                            <div className="textblock">
                                <h4 className="textblock__title">Super Flowers</h4>
                                <span className="textblock__size">Size: Regular</span>
                                <span className="textblock__delivery">Delivery date: 29.08.2021</span>
                            </div>
                        </div>
                        <span className="cartlist__item-price">$20.99</span>
                        <span className="cartlist__item-quantity">
                            <span className="minus">-</span>1<span className="plus">+</span>
                        </span>
                        <span className="cartlist__item-total">$20.99
                            <div className="bin"><img src={bin} alt="" /></div>
                        </span>
                    </li>
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
