import React from 'react'
import { Link } from 'react-router-dom';

import ModalStyled from './Modal.styles'

const Modal = ({title, text, linkText, link}) => {
    return (
        <>
                <ModalStyled>
                    <div className="modal">
                        <h3 className="modal__title">{title}</h3>
                        <p className="modal__text">{text}</p>
                        <Link to={`/${link}`}><span className="modal__close">close</span></Link>
                        <Link to={`/${link}`} className="modal__link">{linkText}</Link>
                    </div>
                </ModalStyled> 
        </>
    )
}

export default Modal;
