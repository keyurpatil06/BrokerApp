const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SHORTLIST':
            // let { listingID, title, mainImgSrc, price } = action.payload
            // console.log(listingID, title, mainImgSrc, price);

            // let shortListedItem = {
            //     listingID: listingID,
            //     title: title,
            //     mainImgSrc: mainImgSrc,
            //     price: price
            // }

            return {
                ...state,
                shortListedItems: [...state.shortListedItems, action.payload]  
            }

        default:
            return state
    }
}

export default cartReducer