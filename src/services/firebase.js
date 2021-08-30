import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut } from "firebase/auth";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const createUser = ({email, password}) => {
    console.log('create', email, password);
    createUserWithEmailAndPassword(auth, email, password);
}

export const addUser = ({firstName, lastName, email, phone, password}) => {
    addDoc(collection(db, "users"), {
        firstName,
        lastName,
        email,
        phone,
        password
      }); 
}

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const logOut = () => signOut(auth);

export default firebase;
