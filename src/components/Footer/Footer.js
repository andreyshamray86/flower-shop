import React from 'react'
import { Link } from 'react-router-dom'

import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'

import FooterStyled from './Footer.styles'

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer__about">
                <div className="footer__about-info">
                    <h4>Flowers Shop</h4>
                    <p>Fresh Flowers - Our shop is open 24 hours a day</p>
                </div>
            </div>
            <nav>
                <ul className="footer__nav">
                   <Link to='/'><li className="footer__nav-item">Home</li></Link>
                   <Link to='/flowers'><li className="footer__nav-item">Flowers</li></Link> 
                   <Link to='/gifts'><li className="footer__nav-item">Gifts</li></Link> 
                   <Link to='/card'><li className="footer__nav-item">Card</li></Link>  
                </ul>
            </nav>
            
            <div className="footer__social">
                <img src={facebook} alt="facebook-icon" />
                <img src={instagram} alt="instagram-icon" />
                <img src={twitter} alt="twitter-icon" />
            </div>
        </FooterStyled>
    )
}

export default Footer
