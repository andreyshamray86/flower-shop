import React from 'react'

import {RandomStyled, RandomTitleStyled }from './RandomItems.styles'

import flowers1 from '../../assets/images/flowers8.png'

const RandomItems = () => {
    return (
        <>
            <RandomTitleStyled>Flowers</RandomTitleStyled>
            <RandomStyled>
                <div className="random__item">
                    <div className="random__item-image">
                        <img src={flowers1} alt="" />
                    </div>
                    <h3 className="random__item-title">Roses</h3>
                    <p className="random__item-price">$39.99</p>
                    <button className="random__item-btn">Choose</button>
                </div>
                <div className="random__item">
                    <div className="random__item-image">
                        <img src={flowers1} alt="" />
                    </div>
                    <h3 className="random__item-title">Roses</h3>
                    <p className="random__item-price">$39.99</p>
                    <button className="random__item-btn">Choose</button>
                </div>
                <div className="random__item">
                    <div className="random__item-image">
                        <img src={flowers1} alt="" />
                    </div>
                    <h3 className="random__item-title">Roses</h3>
                    <p className="random__item-price">$39.99</p>
                    <button className="random__item-btn">Choose</button>
                </div>
                <div className="random__item">
                    <div className="random__item-image">
                        <img src={flowers1} alt="" />
                    </div>
                    <h3 className="random__item-title">Roses</h3>
                    <p className="random__item-price">$39.99</p>
                    <button className="random__item-btn">Choose</button>
                </div>
                <div className="random__line"></div>
            </RandomStyled>
        </>
    )
}

export default RandomItems
