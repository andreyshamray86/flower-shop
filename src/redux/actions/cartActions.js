export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}

export const decreaseQuantity = item => dispatch => {
    if(item.quantity === 1) {
        dispatch(removeItem(item));
    }
    dispatch({
        type: 'DECREASE_ITEM',
        payload: item
    }) 
}