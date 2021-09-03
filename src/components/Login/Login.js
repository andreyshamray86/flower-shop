import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signInGoogle, signIn } from '../../redux/actions/authActions';

import { Spinner } from '../../components';

import LoginStyled from './Login.styles'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.isLoading);
    const token = useSelector(state => state.auth.token);

    const signInWithGoogleHandler = (e) => {
        e.preventDefault();
        dispatch(signInGoogle());
    }

    const signInHandler = (e) => {
        const credentials = {email, password}
        e.preventDefault();
        dispatch(signIn(credentials));
    }

    let authRedirect;
    if(token) {
        authRedirect = <Redirect to='/'/>
    }


    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <LoginStyled disabled>
            {authRedirect}
            {
                loading ? <Spinner/> :
                <>
                    <h2 className='login__title'>Login</h2>
                    <form className='login__form'>
                    
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={emailHandler}
                    />
                    
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={passwordHandler}
                    />
                    
                    <button 
                        className='login__form-btn'
                        onClick={signInHandler}
                    >Submit</button>
                    
                    <button
                        className='login__form-btn'
                        onClick={signInWithGoogleHandler}
                    >Sign In with Google</button>
                    </form>
                    <Link to='/register'>
                        <p className='login__form-text'>New customer?</p>
                    </Link>
                    <Link to='/register'>
                        <p className='login__form-text'>Lost password?</p>
                    </Link>
                </>
            } 
        </LoginStyled>
    )
}

export default Login;
