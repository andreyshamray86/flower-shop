import React from 'react'
import { useSelector } from 'react-redux';

import { PageDescription, ItemsList } from '../../components'

const Gifts = () => {
    const gifts = useSelector(state => state.gifts.gifts);

    return (
        <>  
            <PageDescription/>
            {gifts.length > 0 && <ItemsList items={gifts}/>}
        </>
    )
}

export default Gifts;
