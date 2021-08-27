import React from 'react'
import { withRouter } from 'react-router-dom'

import PageDescriptionStyled from './PageDescription.styles'

const PageDescription = ({match}) => {
    let image;
    let text;
    if(match.path === '/flowers') {
        image = 'flowers';
        text = 'Wide variety of fresh flowers for all occasions';
    } else {
        image = ''
        text = 'Wide variety of gifts for all occasions';
    }
    return (
        <PageDescriptionStyled image={image}>
                <h2 className="promo__title">{text}</h2>
        </PageDescriptionStyled>
    )
}

export default withRouter(PageDescription);
