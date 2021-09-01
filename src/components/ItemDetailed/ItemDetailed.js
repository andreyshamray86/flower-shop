import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchFlower } from '../../redux/actions/flowersActions';

import ItemDetailedStyled from './ItemDetailed.styles';


const ItemDetailed = ({match}) => {
    const {id} = match.params;
    const {pathname} = useLocation();
    const dbName = pathname.split('/')[1];
    const dispatch = useDispatch();
    const item = useSelector(state => state.flowers.item);
    
    const {image, name, price, likes} = item;

    const gifts = useSelector(state => state.gifts.gifts);
    const slicedGifts = gifts.slice(0, 2);
    
    useEffect(() => {
        dispatch(fetchFlower(id, dbName));
    }, [dispatch, id, dbName]);

    return (
        <ItemDetailedStyled>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h3 className='info__title'>{name}</h3>
                <span className="info__price">${price}</span>
                <div className="info__like">Likes: {likes}</div>
                
                {
                    dbName === 'flowers' && 
                    <>
                        <span className="info__size">Size:</span>
                        <div className="info__sizechoice">
                        <span className="info__sizechoice-item">Standart</span>
                        <span className="info__sizechoice-item">Large</span>
                        <span className="info__sizechoice-item">Premium</span>
                        </div>
                        <span className="gifts">Add a gift:</span>
                        <div className="gifts__choice">
                            {
                                slicedGifts.map(gift => {
                                    return (
                                        <div className="gifts__choice-item" key={gift.id}>
                                            <img src={gift.image} alt={gift.name} />
                                            <h5>{gift.name}</h5>
                                            <span>${gift.price}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }

                <button className="info__btn">Add to cart</button>
            </div>
        </ItemDetailedStyled>
    )
}

export default ItemDetailed;
