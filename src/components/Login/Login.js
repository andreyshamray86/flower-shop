import React from 'react'
import { Link } from 'react-router-dom';

import LoginStyled from './Login.styles';

const Login = () => {
    return (
        <LoginStyled>
            <h2 className='login__title'>Login</h2>
            <form className='login__form'>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" />
                <button className='login__form-btn'>Submit</button>
            </form>
            <Link to='/register'>
                <p className='login__form-text'>New customer?</p>
            </Link>
            <p className='login__form-text'>Lost password?</p>
        </LoginStyled>
    )
}

export default Login;
