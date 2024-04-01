const ListingsReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isloading: true
            }

        case "MY_API_DATA":
            const featureData = action.payload.filter((item) => {
                return item.featured === true
            })

            return {
                isLoading: false,
                isError: false,
                listings: action.payload,
                featureListings: featureData
            }

        case "API_ERROR":
            return {
                ...state,
                isloading: false,
                isError: true
            }

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            }

        case "SET_SINGLE_LISTING":
            return {
                isSingleLoading: false,
                singleListing: action.payload,
            }

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export default ListingsReducer