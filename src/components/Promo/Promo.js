import React from 'react'

import PromoStyled from './Promo.styles'

const Promo = () => {
    return (
        <PromoStyled>
                <h2 className="promo__title">Beautiful flowers and gifts <br/>special for you</h2>
                <p className="promo__text">Creating beautiful flower arrangements wrapped elegantly and delivered to a location of your choosing. We always deliver flowers by hand using our own same day flower delivery service. 24 hour delivery available</p>
                <button className="promo__btn">Shop now</button>
        </PromoStyled>
    )
}

export default Promo
