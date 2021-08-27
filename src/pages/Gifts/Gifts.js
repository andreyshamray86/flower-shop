import React from 'react'

import ItemsList from '../../components/ItemsList/ItemsList';
import PageDescription from '../../components/PageDescription/PageDescription';
import Sort from '../../components/Sort/Sort';

const Gifts = () => {
    return (
        <>  
            <PageDescription/>
            <Sort/>
            <ItemsList/>
        </>
    )
}

export default Gifts;
