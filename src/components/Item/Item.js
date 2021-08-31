import React from 'react'

import ItemStyled from './Item.styles';

import flower1 from '../../assets/images/flowers15.png'

const Item = ({item}) => {
    const { name, price, likes, image } = item;
    return (
        <ItemStyled>
            <div className="item__image">
                <img src={image} alt="" />
            </div>
            <div className="item__info">
                <h4 className="item__info-title">{name}</h4>
                <p className="item__info-price">${price}</p>
            </div>
            <button className="item__btn">Select options</button>
        </ItemStyled>
    )
}

export default Item;
