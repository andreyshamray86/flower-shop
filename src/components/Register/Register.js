import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Field, reduxForm } from 'redux-form'
import { required, email, number, minLength2, minLength11, passwordsMatch } from '../../helpers/validator';

import { signUp } from '../../redux/actions/authActions';

import { Modal } from '../../components';
import cross from '../../assets/icons/red-cross.png'

import RegisterStyled from './Register.styles';


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error } }) => (
        <>
            <label>{label}</label>
            <input {...input} type={type} className={touched && error ? 'input-error' : ''}/>
            {touched && error && <span className='error'>{error}</span>}
            {touched && error && <div className='error-cross'><img src={cross} alt="" /></div>} 
        </>
)


const Register = (props) => {
    const { handleSubmit, submitting } = props;
    console.log(props);

    // const dispatch = useDispatch();
    // const user = useSelector(state => state.auth.user);


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!password === password2) {
    //         return;
    //     }
    //     const user = {firstName, lastName, email, phone, password}
    //     dispatch(signUp(user));

    //     setFirstName('');
    //     setLastName('');
    //     setEmail('');
    //     setPhone('');
    //     setPassword('');
    //     setPassword2('');
    // }

    const submitForm = (values) => {
        const { firstName, lastName, email, phone, password } = values;
        const user = {firstName, lastName, email, phone, password};
        console.log(user);
    }

    return (
        <RegisterStyled>
            {/* {user && <Modal 
                title='Signup successful' 
                text='Now you can login'
                linkText='To Login Page'
                link='login'/>} */}
                
            <h2 className='register__title'>New customer</h2>

            <form onSubmit={handleSubmit(submitForm)} className='register__form'>
                <Field
                    name="firstName"
                    type="text"
                    component={renderField}
                    label="First Name"
                    validate={[required, minLength2]}
                />
                <Field
                    name="lastName"
                    type="text"
                    component={renderField}
                    label="Last Name"
                    validate={[required, minLength2]}
                />
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    label="Email"
                    validate={[email, required]}
                />
                <Field
                    name="phone"
                    type="text"
                    component={renderField}
                    label="Phone number in format 81234567890"
                    validate={[required, number, minLength11]}
                />
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"
                    validate={[required]}
                />
                <Field
                    name="password2"
                    type="password"
                    component={renderField}
                    label="Confirm password"
                    validate={[required, passwordsMatch]}
                />

                <button 
                    type="submit"
                    className='register__form-btn'
                    disabled={submitting}>
                    Sign Up
                </button>
                </form>
        </RegisterStyled>
    )
}

export default reduxForm({
    form: 'registration form'
})(Register);
