import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItem } from '../../redux/actions/cartActions'

import CardStyled from './CardComponent.styles'

import frame from '../../assets/images/frame.jpg'

const CardComponent = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    let signature = user ? `${user.firstName} ${user.lastName}` : "Enter your name here";
    
    const messageHandler = (e) => {
        setMessage(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const item = {
            id: 'card',
            name: 'Card',
            image: frame,
            price: 0,
            quantity: 1,
            message
        }
        dispatch(addItem(item));
    }

    console.log(message);

    return (
        <CardStyled>
            <div className="card__info">
                <h3 className="card__info-title">Greeting card</h3>
                <p className="card__info-text">Sending a greeting card with our card service is simple: write, choose a card and add to cart</p>
            </div>
            <div className="card__image">
                <div className="card__image-wrapper">
                    <img src={frame} alt="message frame" />
                    <div className="card__image-formwrapper">
                    <form>
                        <textarea 
                            className="card__image-inputText" 
                            cols="44" 
                            rows="6" 
                            placeholder='Enter your message here'
                            onChange={messageHandler}
                            value={message}
                        ></textarea>
                        <input className="card__image-inputName" type="text" placeholder={signature} />
                        <button className="card__image-btn" onClick={submitHandler}>Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </CardStyled>
    )
}

export default CardComponent
