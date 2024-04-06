const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_LISTINGS":
            return {
                ...state,
                filter_listings: [...action.payload].sort((a, b) => { return a.price - b.price }),
                all_listings: [...action.payload],
                filters: {
                    ...state.filters,
                    text: '',
                    rooms: 'All',
                    bathrooms: 'All'
                }
            }

        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            }

        case "SORTING_LISTINGS":
            let newSortData;

            if (state.sorting_value === 'lowest') {
                newSortData = [...action.payload].sort((a, b) => { return a.price - b.price })
            }
            if (state.sorting_value === 'highest') {
                newSortData = [...action.payload].sort((a, b) => { return b.price - a.price })
            }

            return {
                ...state,
                filter_listings: newSortData,
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case "FILTER_PRODUCTS":
            let { all_listings } = state
            let tempFilterProducts = [...all_listings]

            const { text, rooms, bathrooms } = state.filters;

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((currEle) => {
                    return currEle.title.toLowerCase().includes(text.toLowerCase())
                })
            }

            if (rooms !== 'All') {
                tempFilterProducts = tempFilterProducts.filter((currEle) => {
                    return currEle.rooms === parseInt(rooms)
                })
            }

            if (bathrooms !== 'All') {
                tempFilterProducts = tempFilterProducts.filter((currEle) => {
                    return currEle.bathrooms === parseInt(bathrooms)
                })
            }

            return {
                ...state,
                filter_listings: tempFilterProducts,
            }

        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    text: '',
                    rooms: 'All',
                    bathrooms: 'All'
                },
                filter_listings: state.all_listings
            }


        default:
            return state
    }
}

export default filterReducer
