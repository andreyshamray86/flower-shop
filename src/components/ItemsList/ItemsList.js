import React from 'react'

import Item from '../Item/Item'

import ItemsListStyled from './ItemsList.styles'

const ItemsList = ({items}) => {
    console.log(items);
    return (
        <ItemsListStyled>
            {
                items.map(item => <Item item={item} key={item.id}/>)
            }
        </ItemsListStyled>
    )
}

export default ItemsList
