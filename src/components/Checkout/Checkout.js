import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { countTotal } from '../../helpers/cartFuncs';

import { Modal } from '../../components';

import { CheckoutStyled, 
    CheckoutTitleStyled, 
    CheckoutTotalStyled, 
    BtnStyled } from './Checkout.styles';

const Checkout = () => {
    const [showModal, setShowModal] = useState(false);
    const cartItems = useSelector(state => state.cart.cart);

    const total = countTotal(cartItems);

    return (
        <CheckoutStyled>
            {showModal && <Modal
                title='Payment Details'
                text='Payment form will be here...'
                linkText='Go to Home Page'
                link=''
            />}
            <CheckoutTitleStyled>Your order</CheckoutTitleStyled>
            <ul className="checkout">
                <li className="checkout__item">
                    <span className="checkout__item-name header">Item</span>
                    <span className="checkout__item-price header">Price</span>
                    <span className="checkout__item-quantity header">Quantity</span>
                </li>
                {
                    cartItems.map(item => {
                        return <li className="checkout__item" key={item.id}>
                                <span className="checkout__item-name">{item.name}</span>
                                <span className="checkout__item-price">{item.price}</span>
                                <span className="checkout__item-quantity">x {item.quantity}</span>
                            </li>
                    })
                }
            </ul>
            <CheckoutTotalStyled>Total: ${total}</CheckoutTotalStyled>
            <div className='btn__wrap'>
                <BtnStyled onClick={() => setShowModal(true)}>Pay order</BtnStyled>
            </div>
        </CheckoutStyled>
    )
}

export default Checkout;
