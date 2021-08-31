import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getGifts } from '../../redux/actions/giftsActions'

import { PageDescription, ItemsList, Sort } from '../../components'

const Gifts = () => {
    const dispatch = useDispatch();

    const gifts = useSelector(state => state.gifts.gifts);

    useEffect(() => {
        dispatch(getGifts());
    }, [dispatch]);
    return (
        <>  
            <PageDescription/>
            <Sort/>
            {gifts.length > 0 && <ItemsList items={gifts}/>}
        </>
    )
}

export default Gifts;
