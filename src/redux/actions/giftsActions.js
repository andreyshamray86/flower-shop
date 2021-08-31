import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const getGiftsStart = () => {
    return {
        type: 'GET_GIFTS_START'
    }
}

const getGiftsSuccess = (gifts) => {
    return {
        type: 'GET_GIFTS_SUCCESS',
        payload: gifts
    }
}

const getGiftsFail = error => {
    return {
        type: 'GET_GIFTS_FAIL',
        payload: error
    }
}

export const getGifts = () => async (dispatch) => {
    dispatch(getGiftsStart());
    try {
        const querySnapshot = await getDocs(collection(db, "gifts"));
        let gifts = [];
        querySnapshot.forEach((doc) => {
            gifts.push(doc.data());
          });
        dispatch(getGiftsSuccess(gifts));
    } catch(error) {
        dispatch(getGiftsFail(error));
    }
}

