import React from 'react'

import SpinnerStyled from './Spinner.styles';

const Spinner = () => {
    return (
        <SpinnerStyled >
            <div className="lds-dual-ring"></div>
        </SpinnerStyled>
    )
}

export default Spinner;
