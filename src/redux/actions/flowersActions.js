import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const getFlowersStart = () => {
    return {
        type: 'GET_FLOWERS_START'
    }
}

const getFlowersSuccess = (flowers) => {
    return {
        type: 'GET_FLOWERS_SUCCESS',
        payload: flowers
    }
}

const getFlowersFail = error => {
    return {
        type: 'GET_FLOWERS_FAIL',
        payload: error
    }
}

export const getFlowers = () => async (dispatch) => {
    dispatch(getFlowersStart());
    try {
        const querySnapshot = await getDocs(collection(db, "flowers"));
        let flowers = [];
        querySnapshot.forEach((doc) => {
            flowers.push({
                id: doc.id,
                ...doc.data()
            });
          });
        dispatch(getFlowersSuccess(flowers));
    } catch(error) {
        dispatch(getFlowersFail(error));
    }
}

