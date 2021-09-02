export const addItemToCart = (cart, cartItemToAdd) => {
    const exist = cart.find(cartItem => {
        return cartItem.id === cartItemToAdd.id
    })
    if(exist) {
        return cart.map(item => {
            return item.id === cartItemToAdd.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        })
    }

    return [...cart, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cart, itemToRemove) => {
    return cart.filter(item => item.id !== itemToRemove.id)
}

export const decreaseItemInCart = (cart, decreasingItem) => {
    const updatedCart = cart.map(item => {
        return item.id === decreasingItem.id 
        ? {...item, quantity: item.quantity - 1}
        : item
    })
    return updatedCart;
}

export const countTotal = cart => {
    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const updatedTotal = +total.toFixed(2);
    return updatedTotal;
}

export const countItems = cart => {
    const total = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );
    return total;
}