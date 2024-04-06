import { createContext, useReducer, useEffect } from "react"
import axios from 'axios'
import reducer from '../reducer/listingsReducer'

export const listingsContext = createContext()

const API = "http://localhost:3000/generate";

const initialState = {
    isLoading: false,
    isError: false,
    listings: [],
    featureListings: [],
    isSingleLoading: false,
    singleListing: {}
}

const ListingsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url)
            const listings = await res.data
            // console.log(listings)
            dispatch({ type: "MY_API_DATA", payload: listings })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(API)
    }, [])

    return (
        <listingsContext.Provider value={{ ...state, getProducts }}>
            {children}
        </listingsContext.Provider>
    )
}

export default ListingsProvider
