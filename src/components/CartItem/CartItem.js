import React from 'react'
import { useDispatch } from 'react-redux';

import { addItem, removeItem, decreaseQuantity } from '../../redux/actions/cartActions';

import CartListItemStyled from './CartItem.styles'

import bin from '../../assets/icons/bin.svg';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const updatedPrice = +(item.price * item.quantity).toFixed(2);

    return (
        <CartListItemStyled className="cartlist__item">
            <div className="cartlist__item-info">
                <img src={item.image} alt="cart item" />
                <div className="textblock">
                    <h4 className="textblock__title">{item.name}</h4>
                    { item.id !== 'card' 
                        ? <span className="textblock__size">Size: {item.size}</span>
                        : <span className="textblock__size">Message: {item.message}</span>
                    }
                    { item.id !== 'card' && <span className="textblock__delivery">Delivery date: {item.date}</span>}
                </div>
            </div>
            <span className="cartlist__item-price">${item.price}</span>
            <span className="cartlist__item-quantity">
                { item.id !== 'card' && <span className="minus" onClick={() => dispatch(decreaseQuantity(item))}>-</span>}
                {item.quantity}
                { item.id !== 'card' && <span className="plus" onClick={() => dispatch(addItem(item))}>+</span>}
            </span>
            <span className="cartlist__item-total">${updatedPrice}
                <div className="bin" onClick={() => dispatch(removeItem(item))}><img src={bin} alt="" /></div>
            </span>
        </CartListItemStyled>
    )
}

export default CartItem
