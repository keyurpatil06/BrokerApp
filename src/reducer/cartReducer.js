const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SHORTLIST':
            let existingItem = state.shortListedItems.find((item) => item == action.payload)

            if (existingItem) {
                return {
                    ...state,
                    shortListedItems: [...state.shortListedItems]
                }
            } else {
                return {
                    ...state,
                    totalSelectedListings: state.totalSelectedListings + 1,
                    shortListedItems: [...state.shortListedItems, action.payload]
                }
            }

        case 'REMOVE_SHORTLIST':
            return {
                ...state,
                totalSelectedListings: state.totalSelectedListings - 1,
                shortListedItems: state.shortListedItems.filter((item) => {
                    return item.listingID !== action.payload
                })
            }

        default:
            return state
    }
}

export default cartReducer