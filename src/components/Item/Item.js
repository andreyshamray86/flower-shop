import React from 'react'

import ItemStyled from './Item.styles';

import flower1 from '../../assets/images/flowers15.png'

const Item = () => {
    return (
        <ItemStyled>
            <div className="item__image">
                <img src={flower1} alt="" />
            </div>
            <div className="item__info">
                <h4 className="item__info-title">Pink tulips</h4>
                <p className="item__info-price">$20.99</p>
            </div>
            <button className="item__btn">Select options</button>
        </ItemStyled>
    )
}

export default Item;
