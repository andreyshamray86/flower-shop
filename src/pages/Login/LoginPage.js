import React from 'react'

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const LoginPage = ({match}) => {
    let component;
    if(match.path === '/register') {
        component = <Register/>
    } else {
        component = <Login/>
    }
    return (
        <>
            {component}
        </>
    )
}

export default LoginPage;
