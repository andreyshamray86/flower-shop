import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchFlower } from '../../redux/actions/flowersActions';
import { addItem } from '../../redux/actions/cartActions';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ItemDetailedStyled from './ItemDetailed.styles';


const ItemDetailed = ({match}) => {
    const categories = ['Standart', 'Large', 'Premium'];
    const [category, setCategory] = useState('Standart');
    const [date, setDate] = useState(new Date());
    const {id} = match.params;
    const {pathname} = useLocation();
    const dbName = pathname.split('/')[1];
    const dispatch = useDispatch();
    const item = useSelector(state => state.flowers.item);
    
    const { image, name, price, likes} = item;

    const gifts = useSelector(state => state.gifts.gifts);
    
    useEffect(() => {
        dispatch(fetchFlower(id, dbName));
    }, [dispatch, id, dbName]);

    const categoryHandler = (e) => {
        setCategory(e.target.innerText);
    }
    let newPrice = item[category.toLowerCase()] ? item[category.toLowerCase()] : price;


    const addHandler = () => {
        const item = {
            id,
            name,
            price: newPrice,
            image,
            size: category,
            date: date.toLocaleDateString()
        }
        dispatch(addItem(item));
    }

    return (
        <ItemDetailedStyled>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h3 className='info__title'>{name}</h3>
                <span className="info__price">${newPrice}</span>
                <div className="info__like">Likes: {likes}</div>
                
                {
                    dbName === 'flowers' && 
                    <>
                        <span className="info__size">Size:</span>
                        <div className="info__sizechoice">
                        
                        {
                            categories.map((cat, index) => {
                                return (
                                    <span key={index} className={`info__sizechoice-item ${categories[index] === category ? 'active' : ''}`} onClick={categoryHandler}>{cat}</span>
                                )
                            })
                        }
                        </div>
                        <span className="gifts">Add a gift:</span>
                        <div className="gifts__choice">
                            {
                                gifts.map(gift => {
                                    return (
                                        <div 
                                            className="gifts__choice-item" 
                                            key={gift.id} 
                                            onClick={() => dispatch(addItem({...gift, date: date.toLocaleDateString(), size: category}))}>
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

                <h5 className="info__date-label">Delivery date:</h5>
                <DatePicker 
                    className="info__date" 
                    dateFormat="dd/MM/yyyy"
                    selected={date} 
                    onChange={(date) => setDate(date)}
                    />
                <button className="info__btn" onClick={addHandler}>Add to cart</button>
            </div>
        </ItemDetailedStyled>
    )
}

export default ItemDetailed;
