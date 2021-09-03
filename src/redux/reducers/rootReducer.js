import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import cartReducer from './cartReducer';
import flowersReducer from './flowersReducer';
import giftsReducer from './giftsReducer';
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    flowers: flowersReducer,
    gifts: giftsReducer,
    sort: sortReducer,
    form: formReducer
});

export default rootReducer;