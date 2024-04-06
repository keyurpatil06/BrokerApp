import { createContext, useContext, useEffect, useReducer } from 'react';
import { listingsContext } from './context';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext()

const initialState = {
    filter_listings: [],
    all_listings: [],
    sorting_value: 'lowest',
    filters: {
        text: '',
        rooms: 'All',
        bathroom: 'All'
    }
}

export const FilterContextProvider = ({ children }) => {
    const { listings } = useContext(listingsContext)
    // console.log(listings);

    const [state, dispatch] = useReducer(reducer, initialState)

    const sorting = (e) => {
        let userVal = e.target.value
        dispatch({ type: 'GET_SORT_VALUE', payload: userVal })
    }

    const updateFilterValue = (e) => {
        let name = e.target.name
        let value = e.target.value
        return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } })
    }

    const clearFilters = () => {
        dispatch({ type: 'CLEAR_FILTERS' })
    }

    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_LISTINGS', payload: listings })
    }, [listings])

    useEffect(() => {
        dispatch({ type: 'SORTING_LISTINGS', payload: listings })
    }, [listings, state.sorting_value])

    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS', payload: listings })
    }, [listings, state.filters])

    return (
        <FilterContext.Provider value={{ ...state, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}