import React from 'react'

import Promo from '../../components/Promo/Promo'
import Offers from '../../components/Offers/Offers'
import RandomItems from '../../components/RandomItems/RandomItems'
import Delivery from '../../components/Delivery/Delivery'

const Home = () => {
    return (
        <>
            <Promo/>
            <Offers/>
            <RandomItems/>
            <RandomItems/>
            <Delivery/>
        </>
    )
}

export default Home
