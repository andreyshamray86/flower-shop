import React from 'react'

import HeaderStyled from './Header.styles'

import logo from '../../assets/icons/logo.svg'
import cart from '../../assets/icons/cart.svg'
import search from '../../assets/icons/search.svg'

const Header = () => {
    return (
        <HeaderStyled>
            <div className="left">
                <div className="left__logo">
                    <img src={logo} alt="logo"  className="left__logo-image"/>
                    <h1>Flower <span className="left__logo-shop">Shop</span></h1>
                </div>
                <nav>
                    <ul className="left__nav">
                      <li className="left__nav-item">Home</li>
                      <li className="left__nav-item">Flowers</li> 
                      <li className="left__nav-item">Gifts</li> 
                      <li className="left__nav-item">Card</li>   
                    </ul>
                </nav>
            </div>
            <div className="right">
                <div className="right__auth">
                    <p>Login/Register</p>
                </div>
                <div className="right__cart">
                    <img src={cart} alt="cart" />
                </div>
                <div className="right__search">
                    <img src={search} alt="search" />
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header;
