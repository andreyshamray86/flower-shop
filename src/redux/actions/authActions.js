import { signInWithGoogle, createUser, addUser, logOut, auth, db } from '../../services/firebase';

import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

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

export const checkAuth = () => dispatch => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if(token) {
        dispatch({ 
            type: 'LOGIN_WITH_GOOGLE', 
            token,
            userId
        });
    } else {
        dispatch(signOut());
    }
}

export const signIn = ({email, password}) => async (dispatch) => {
    dispatch(signInStart());

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const {accessToken, uid, email} = userCredential.user;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('userId', uid);
        dispatch({ 
            type: 'LOGIN_SUCCESS', 
            token: accessToken,
            userId: uid
         });
        dispatch(fetchUser(email));
    })
    .catch((error) => {
        dispatch(signInFail(error));
    });
}

export const signInGoogle = () => dispatch => {
    dispatch(signInStart());

    signInWithGoogle()
    .then(result => {
        localStorage.setItem('token', result.user.accessToken);
        localStorage.setItem('userId', result.user.uid);
        dispatch({ 
            type: 'LOGIN_WITH_GOOGLE', 
            token: result.user.accessToken,
            userId: result.user.uid
         });
        
    })
    .catch(error => {
        dispatch(signInFail(error));
    })
}

export const signOut = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    logOut();
    dispatch({ type: 'LOGOUT' });
}

export const signUp = (user) => dispatch => {
    dispatch({type: 'SIGNUP_START'});
    try {
        createUser(user);
        addUser(user);
        dispatch({type: 'SIGNUP_SUCCESS', payload: user});
    } catch(err) {
        dispatch({type: 'SIGNUP_FAIL', payload: err}); 
    }  
}

export const fetchUser = (email) => async (dispatch) => {
    let user;
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        user = doc.data();
    });
    dispatch({type: 'FETCH_USER', payload: user});
}

export const clearErrors = () => {
    return {
        type: 'CLEAR_ERRORS'
    }
}