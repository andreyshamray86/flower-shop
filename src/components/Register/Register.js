import React from 'react'

import RegisterStyled from './Register.styles';

const Register = () => {
    return (
        <RegisterStyled>
            <h2 className='register__title'>New customer</h2>
            <form className='register__form'>
                <label htmlFor="first">First Name</label>
                <input type="text" name="" id="first" />
                <label htmlFor="last">Last Name</label>
                <input type="text" name="" id="last" />
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" />
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="" id="phone" />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" />
                <label htmlFor="password2">Confirm password</label>
                <input type="password" name="" id="password2" />
                <button className='register__form-btn'>Sign Up</button>
            </form>
        </RegisterStyled>
    )
}

export default Register;
