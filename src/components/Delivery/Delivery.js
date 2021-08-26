import React from 'react'

import DeliveryStyled from './Delivery.styles'

import delivery from '../../assets/icons/delivery.png'
import allday from '../../assets/icons/24hour.png'
import map from '../../assets/icons/map.png'

const Delivery = () => {
    return (
        <DeliveryStyled>
            <h2 className='delivery__title'>Delivery</h2>
            <p className='delivery__text'>Our flowers are delivered to you fresh all over the city. Our bouquets are prepared by skilled florists and delivered on a next day service, 6 days per week. Order before 12pm and have it delivered anywhere, on time</p>
            <div className="delivery__features">
                <div className="delivery__features-image">
                    <img src={delivery} alt="delivery icon" />
                    <p>Fast free delivery</p>
                </div>
                <div className="delivery__features-image">
                    <img src={allday} alt="24hour icon" />
                    <p>24 hours 6 days</p>
                </div>
                <div className="delivery__features-image">
                    <img src={map} alt="map icon" />
                    <p>All city locations</p>
                </div>
            </div>
        </DeliveryStyled>
    )
}

export default Delivery;
