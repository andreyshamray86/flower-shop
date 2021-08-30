import React from 'react'
import { Link } from 'react-router-dom';

import ModalStyled from './Modal.styles'

const Modal = () => {
    return (
        <>
                <ModalStyled>
                    <div className="modal">
                        <h3 className="modal__title">Signup successful</h3>
                        <p className="modal__text">Now you can login</p>
                        <Link to='/login'><span className="modal__close">close</span></Link>
                        <Link to='/login' className="modal__link">To Login Page</Link>
                    </div>
                </ModalStyled> 
        </>
    )
}

export default Modal;
