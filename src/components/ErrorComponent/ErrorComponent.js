import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearErrors } from '../../redux/actions/authActions';

import ErrorComponentStyled from './ErrorComponent.styles'

const ErrorComponent = ({error}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const clickHandler = () => {
        dispatch(clearErrors());
        history.push('/login');
    }
    let text;
    if(error.code === 'auth/user-not-found') {
        text = 'User with entered email not found'
    } else if(error.code === 'auth/wrong-password') {
        text = 'Wrong password'
    } else if(error) {
        text = 'Something went wrong. Try later'
    }

    console.log(error.code);
    return (
        <>
                <ErrorComponentStyled>
                    <div className="modal">
                        <h3 className="modal__title">Error</h3>
                        <p className="modal__text">{text}</p>
                        <p className="modal__text"></p>
                        <span className="modal__close" onClick={clickHandler}>close</span>
                        <button className="modal__link" onClick={clickHandler}>To Login Page</button>
                    </div>
                </ErrorComponentStyled> 
        </>
    )
}

export default ErrorComponent;
