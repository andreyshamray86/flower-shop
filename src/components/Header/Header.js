import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { countItems } from '../../helpers/cartFuncs'

import HeaderStyled from './Header.styles'
import logo from '../../assets/icons/logo.svg'
import cart from '../../assets/icons/cart.svg'
import search from '../../assets/icons/search.svg'

const Header = () => {
    const token = useSelector(state => state.auth.token);
    const cartItems = useSelector(state => state.cart.cart);
    const [showSidemenu, setShowSidemenu] = useState(false);
    const history = useHistory();

    const itemsInCart = countItems(cartItems);

    const toggleSide = () => {
        setShowSidemenu(!showSidemenu)
    }

    const navigateToOtherPage = link => {
        setShowSidemenu(!showSidemenu);
        history.push(link);
    }

    return (
        <HeaderStyled>
            <div className={`hamburger ${showSidemenu ? 'show' : ''}`} onClick={toggleSide}>
                <label htmlFor="check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className={`sidebar-menu  ${showSidemenu ? 'show' : ''}`}>
                    <nav>
                        <ul className="sidebar__nav">
                            <li to='/' className="sidebar__nav-item" onClick={() => navigateToOtherPage('/')}>Home</li>
                            <li className="sidebar__nav-item" onClick={() => navigateToOtherPage('/flowers')}>Flowers</li> 
                            <li className="sidebar__nav-item" onClick={() => navigateToOtherPage('/gifts')}>Gifts</li> 
                            <li className="sidebar__nav-item" onClick={() => navigateToOtherPage('/card')}>Card</li>
                            <li className="sidebar__nav-item" onClick={() => navigateToOtherPage('/login')}>Login/Register</li>    
                        </ul>
                    </nav>
            </div>
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
                    {token ? <Link to='/logout'><p>Logout</p></Link> 
                        : <Link to='/login'><p>Login/Register</p></Link>}
                </div>
                <Link to='/cart'>
                    <div className="right__cart">
                        <img src={cart} alt="cart" />
                        {
                            itemsInCart > 0 &&
                            <div className="right__cart-quantity">{itemsInCart}</div>
                        }
                    </div>
                </Link>
                <div className="right__search">
                    <img src={search} alt="search" />
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header;
