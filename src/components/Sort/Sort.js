import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { sortChange } from '../../redux/actions/sortActions';

import SortStyled from './Sort.styles';

const Sort = () => {
    const [sortValue, setSortValue] = useState('default');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSortValue(e.target.value); 
    }

    dispatch(sortChange(sortValue));
    
    return (
        <SortStyled>
            <label htmlFor="select">Sort by: </label>
            <div>
                <select className="select" value={sortValue} onChange={handleChange}>
                    <option value="default">default</option>
                    <option value="popularity">popularity</option>
                    <option value="priceAsc">price: low to high</option>
                    <option value="priceDesc">price: high to low</option>
                </select>
            </div>
        </SortStyled>
    )
}

export default Sort;
