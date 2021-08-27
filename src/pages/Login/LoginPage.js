import React from 'react'

import { Login, Register } from '../../components'

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
