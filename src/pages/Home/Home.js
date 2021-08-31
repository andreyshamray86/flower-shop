import React from 'react'
import { useSelector } from 'react-redux'

import { Promo, Offers, RandomItems, Delivery } from '../../components'

const Home = () => {
    const flowers = useSelector(state => state.flowers.flowers);
    const gifts = useSelector(state => state.gifts.gifts);

    return (
        <>
            <Promo/>
            <Offers/>
            <RandomItems title='flowers' items={flowers}/>
            <RandomItems title='gifts' items={gifts}/>
            <Delivery/>
        </>
    )
}

export default Home
