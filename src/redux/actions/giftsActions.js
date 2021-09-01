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

// export const sort = (sortValue, items) => {
//     switch(sortValue) {
//         case 'popularity':
//             items.sort((a, b) => a.likes < b.likes ? 1 : -1)
//             return {
//                 type: 'SORT_POPULARITY',
//                 payload: items
//             }
//         case 'priceAsc':
//             items.sort((a, b) => a.price > b.price ? 1 : -1)
//             return {
//                 type: 'SORT_PRICE_ASC',
//                 payload: items
//             }
//         case 'priceDesc':
//             items.sort((a, b) => a.price < b.price ? 1 : -1)
//             return {
//                 type: 'SORT_PRICE_DESC',
//                 payload: items
//             }
//         case 'default':
//             items.sort((a, b) => a.name > b.name ? 1 : -1)
//             return {
//                 type: 'SORT_DEFAULT',
//                 payload: items
//             }
//         default: 
//         return {}
        
//     }
// }

