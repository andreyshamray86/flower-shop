import { signInWithGoogle, logOut } from '../../services/firebase';


const signInStart = () => {
    return {
        type: 'LOGIN_START'
    }
}

const signInFail = (error) => {
    return {
        type: 'LOGIN_FAIL',
        payload: error
    }
}

export const getCurrentUser = (user) => {
    return {
        type: 'GET_CURRENT_USER',
        payload: user
    }
}

export const signInGoogle = () => dispatch => {
    dispatch(signInStart());
    signInWithGoogle()
    .then(result => {
        dispatch({ type: 'LOGIN_WITH_GOOGLE', payload: result.user });
        localStorage.setItem('isAuthenticated', 'true');
    })
    .catch(error => {
        dispatch(signInFail(error));
    })
}

export const signOut = () => dispatch => {
    logOut();
    localStorage.removeItem('loggedin');
    dispatch({ type: 'LOGOUT' });
}