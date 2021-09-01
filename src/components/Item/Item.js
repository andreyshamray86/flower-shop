import React from 'react'
import { withRouter, useLocation } from 'react-router-dom';

import ItemStyled from './Item.styles';

import like from '../../assets/icons/heart.svg';

const Item = ({item, history, random}) => {
    const { name, price, likes, image, id } = item;


    let {pathname} = useLocation();
    if(pathname === '/' && random === 'flowers') {
        pathname = 'flowers'
    } else if(pathname === '/' && random === 'gifts') {
        pathname = 'gifts'
    }
    
    const clickHandler = (e) => {
        e.preventDefault();
        history.push(`${pathname}/${id}`);
    }

    return (
        <ItemStyled>
            <div className="item__image">
                <img src={image} alt="" />
                <div className="item__image-like">
                    <img src={like} alt="like icon" />
                    <p>{likes}</p>
                </div>
            </div>
            <div className="item__info">
                <h4 className="item__info-title">{name}</h4>
                <p className="item__info-price">${price}</p>
            </div>
            <button className="item__btn" onClick={clickHandler}>Details</button>
        </ItemStyled>
    )
}

export default withRouter(Item);
