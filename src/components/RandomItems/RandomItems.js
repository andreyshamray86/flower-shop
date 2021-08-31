import React from 'react'

import { Item } from '..';

import {RandomStyled, RandomTitleStyled }from './RandomItems.styles'

const RandomItems = ({title, items}) => {
    const slicedItems = items.slice(0, 4);

    return (
        <>
            <RandomTitleStyled>{title}</RandomTitleStyled>
            <RandomStyled>
                {
                    slicedItems.map(item => {
                        return <Item item={item} key={item.id}/>
                    })
                }
                <div className="random__line"></div>
            </RandomStyled>
        </>
    )
}

export default RandomItems
