import React from 'react'

import PageDescription from '../../components/PageDescription/PageDescription';
import ItemsList from '../../components/ItemsList/ItemsList';
import Sort from '../../components/Sort/Sort';

const Flowers = () => {
    return (
        <>
            <PageDescription/>
            <Sort/>
            <ItemsList/>
        </>
    )
}

export default Flowers;
