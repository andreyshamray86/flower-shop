import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import OffersStyled from './Offers.styles'
import flowers1 from '../../assets/images/flowers6.png'
import flowers2 from '../../assets/images/flowers9.png'
import flowers3 from '../../assets/images/flowers7.png'

const Offers = () => {
    const history = useHistory();
    const flowers = useSelector(state => state.flowers.flowers);
    
    const clickBirthdayHandler = () => {
        history.push('flowers');
    }

    const clickBestsellerHandler = () => {
        const maxIndex = flowers.reduce((acc, curr, i) => flowers[acc].likes > curr.likes ? acc : i, 0);
        const flowerId = flowers[maxIndex].id;
        history.push(`flowers/${flowerId}`);
    }

    const clickCheapestHandler = () => {
        const minIndex = flowers.reduce((acc, curr, i) => flowers[acc].price < curr.price ? acc : i, 0);
        const flowerId = flowers[minIndex].id;
        history.push(`flowers/${flowerId}`);
    }

    return (
        <OffersStyled>
            <div className="offers__item cheapest">
                <h3 className="offers__item-title">Cheapest Choice</h3>
                <p className="offers__item-text">The cheapest bouquet of the week</p>
                <button className="offers__item-btn" onClick={clickCheapestHandler}>See promotion</button>  
                <img className="offers__item-image" src={flowers1} alt="" /> 
            </div>
            <div className="offers__item bestseller">
                <h3 className="offers__item-title">Bestseller</h3>
                <p className="offers__item-text">The most popular bouquet of the week</p>
                <button className="offers__item-btn btn-bestseller" onClick={clickBestsellerHandler}>See promotion</button>
                <img className="offers__item-image" src={flowers2} alt="" /> 
            </div>
            <div className="offers__item birthday">
                <h3 className="offers__item-title">Birthday Choice</h3>
                <p className="offers__item-text">Choose a bouquet for birthday</p>
                <button className="offers__item-btn" onClick={clickBirthdayHandler}>Open collection</button>
                <img className="offers__item-image" src={flowers3} alt="" /> 
            </div>
        </OffersStyled>
    )
}

export default Offers
