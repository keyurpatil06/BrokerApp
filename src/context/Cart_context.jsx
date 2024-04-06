import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext()

const initialState = {
    shortListedItems: [],
    totalSelectedListings: ''
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // const shortList = (id, title, mainImgSrc, price) => {
    //     dispatch({ type: "SHORTLIST", payload: { id, title, mainImgSrc, price } })
    // }
    const shortList = (item) => {
        dispatch({ type: "SHORTLIST", payload: item })
    }

    return (
        <CartContext.Provider value={{ ...state, shortList }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}