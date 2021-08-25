import React from 'react'

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
                    <li className="footer__nav-item">Home</li>
                    <li className="footer__nav-item">Flowers</li> 
                    <li className="footer__nav-item">Gifts</li> 
                    <li className="footer__nav-item">Card</li>   
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
