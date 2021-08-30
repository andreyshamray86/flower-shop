import React from 'react'
import { Redirect } from 'react-router-dom';

import ModalStyled from './Modal.styles'

const Modal = ({show, setShowModal}) => {

    const closeModal = () => {
        <Redirect to='/login'/>
    }

    return (
        <>
                <ModalStyled>
                    <div className="modal">
                        <h3 className="modal__title">SignUp successful</h3>
                        <p className="modal__text">Registration is successful. Now you can login</p>
                        <span className="modal__close" onClick={closeModal}>X</span>
                    </div>
                </ModalStyled> 
        </>
    )
}

export default Modal;
