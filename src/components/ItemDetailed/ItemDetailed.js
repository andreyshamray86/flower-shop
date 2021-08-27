import React from 'react'

import ItemDetailedStyled from './ItemDetailed.styles';

import flower from '../../assets/images/flowers14.png'
import gift1 from '../../assets/images/cake3.png'
import gift2 from '../../assets/images/cake1.png'

const ItemDetailed = () => {
    return (
        <ItemDetailedStyled>
            <div className="image">
                <img src={flower} alt="" />
            </div>
            <div className="info">
                <h3 className='info__title'>Item</h3>
                <span className="info__price">$21.99</span>
                <div className="info__like">Like</div>
                <span className="info__size">Size:</span>
                <div className="info__sizechoice">
                    <span className="info__sizechoice-item">Standart</span>
                    <span className="info__sizechoice-item">Large</span>
                    <span className="info__sizechoice-item">Premium</span>
                </div>
                <span className="gifts">Add a gift:</span>
                <div className="gifts__choice">
                    <div className="gifts__choice-item">
                        <img src={gift1} alt="gift 1" />
                        <h5>Cake</h5>
                        <span>$7.99</span>
                    </div>
                    <div className="gifts__choice-item">
                        <img src={gift2} alt="gift 2" />
                        <h5>Cake</h5>
                        <span>$11.99</span>
                    </div>
                </div>
                <button className="info__btn">Add to cart</button>
            </div>
        </ItemDetailedStyled>
    )
}

export default ItemDetailed;
