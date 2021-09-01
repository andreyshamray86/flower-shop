import React  from 'react'
import { useSelector } from 'react-redux'

import { PageDescription, ItemsList } from '../../components'

const Flowers = () => {
    const flowers = useSelector(state => state.flowers.flowers);
    
    return (
        <>
            <PageDescription/>
            {flowers.length > 0 && <ItemsList items={flowers}/>}
        </>
    )
}

export default Flowers;
