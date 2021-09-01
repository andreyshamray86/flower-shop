import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortChange } from '../../redux/actions/sortActions';

import Item from '../Item/Item'

import sortFunc from '../../helpers/sortFunction';

import {ItemsListStyled, SortStyled} from './ItemsList.styles'

const ItemsList = ({items}) => {
    const [sortValue, setSortValue] = useState('default');
    const [sortedItems, setSortedItems] = useState(items);
    const sortType = useSelector(state => state.sort.sortType);
    const dispatch = useDispatch();

    dispatch(sortChange(sortValue));

    let sorted = sortFunc(items, sortType);
    if(sorted !== items) {
        setSortedItems(sorted);
    }

    const handleChange = (e) => {
        setSortValue(e.target.value); 
    }

    return (
        <>
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
            <ItemsListStyled>
                {
                    sortedItems.map(item => <Item item={item} key={item.id}/>)
                }
            </ItemsListStyled>
        </>
    )
}

export default ItemsList
