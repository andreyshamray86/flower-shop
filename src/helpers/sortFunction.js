const sortFunc = (arr, sortType) => {
    switch(sortType) {
        case 'popularity':
            return arr.sort((a, b) => a.likes < b.likes ? 1 : -1)
        case 'priceAsc':
            return arr.sort((a, b) => a.price > b.price ? 1 : -1)
        case 'priceDesc':
            return arr.sort((a, b) => a.price < b.price ? 1 : -1)
        case 'default':
            return arr.sort((a, b) => a.name > b.name ? 1 : -1)
        default:
            return arr
    }
}

export default sortFunc;