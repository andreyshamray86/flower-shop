import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFlowers } from '../../redux/actions/flowersActions'

import { PageDescription, ItemsList, Sort } from '../../components'

const Flowers = () => {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getFlowers());
    }, [dispatch]);

    const flowers = useSelector(state => state.flowers.flowers);
    // console.log(flowers);

    return (
        <>
            <PageDescription/>
            <Sort/>
            {flowers.length > 0 && <ItemsList items={flowers}/>}
        </>
    )
}

export default Flowers;
