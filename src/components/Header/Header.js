import React from 'react'
import { Link } from 'react-router-dom'

import HeaderStyled from './Header.styles'

import logo from '../../assets/icons/logo.svg'
import cart from '../../assets/icons/cart.svg'
import search from '../../assets/icons/search.svg'

const Header = () => {
    return (
        <HeaderStyled>
            <div className="left">
                <Link to='/'>
                    <div className="left__logo">
                        <img src={logo} alt="logo"  className="left__logo-image"/>
                        <h1>Flower <span className="left__logo-shop">Shop</span></h1>
                    </div>
                </Link>
                <nav>
                    <ul className="left__nav">
                      <Link to='/' className="left__nav-item">Home</Link>
                      <Link to='/flowers' className="left__nav-item">Flowers</Link> 
                      <Link to='/gifts' className="left__nav-item">Gifts</Link> 
                      <Link to='/card' className="left__nav-item">Card</Link>   
                    </ul>
                </nav>
            </div>
            <div className="right">
                <div className="right__auth">
                    <Link to='/login'><p>Login/Register</p></Link>
                </div>
                <div className="right__cart">
                    <Link to='/cart'><img src={cart} alt="cart" /></Link>
                </div>
                <div className="right__search">
                    <img src={search} alt="search" />
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header;
