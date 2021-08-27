import React from 'react'

import CardStyled from './CardComponent.styles'

import frame from '../../assets/images/frame.jpg'

const CardComponent = () => {
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
                        <textarea className="card__image-inputText" name="" id="" cols="44" rows="6" placeholder='Enter your message here'></textarea>
                        <input className="card__image-inputName" type="text" placeholder='Enter your name here'/>
                        <button className="card__image-btn">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </CardStyled>
    )
}

export default CardComponent
