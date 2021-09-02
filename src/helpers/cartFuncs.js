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