import React from 'react'

import SortStyled from './Sort.styles';

const Sort = () => {
    return (
        <SortStyled>
            <label htmlFor="select">Sort by: </label>
            <div>
                <select id="select" className="select">
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
