import { combineReducers } from "redux";

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
    sort: sortReducer
});

export default rootReducer;