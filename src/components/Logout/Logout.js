import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signOut } from '../../redux/actions/authActions'

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(signOut());
    }, [dispatch]);

    return <Redirect to='/login'/>
}

export default Logout;
