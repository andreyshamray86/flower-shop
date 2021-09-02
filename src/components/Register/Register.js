import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../redux/actions/authActions';

import { Modal } from '../../components';

import RegisterStyled from './Register.styles';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password === password2) {
            return;
        }
        const user = {firstName, lastName, email, phone, password}
        dispatch(signUp(user));

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setPassword2('');
    }

    return (
        <RegisterStyled>
            {user && <Modal 
                title='Signup successful' 
                text='Now you can login'
                linkText='To Login Page'
                link='login'/>}
                
            <h2 className='register__title'>New customer</h2>
            <form className='register__form'>
                <label htmlFor="first">First Name</label>
                    <input 
                        type="text" 
                        name="first"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                
                <label htmlFor="last">Last Name</label>
                    <input 
                        type="text" 
                        name="last"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                     />
                
                <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
               
               <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                    />
               
               <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="pass" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                
                <label htmlFor="password2">Confirm password</label>
                    <input 
                        type="password" 
                        name="pass2" 
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)} 
                    />
                
                <button 
                    className='register__form-btn'
                    onClick={handleSubmit}
                >Sign Up</button>
            </form>
        </RegisterStyled>
    )
}

export default Register;
