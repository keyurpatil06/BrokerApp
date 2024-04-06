import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext()

const getLocalSavedData = () => {
    let data = localStorage.getItem('shortlist')
    if (!data||data.length === 0) {
        return []
    } else {
        return JSON.parse(data)
    }
}

const getLocalSavedCount = () => {
    let data = localStorage.getItem('shortlistCount')
    if (!data||data.length === 0) {
        return 0
    } else {
        return parseInt(JSON.parse(data))
    }
}

const initialState = {
    shortListedItems: getLocalSavedData(),
    totalSelectedListings: getLocalSavedCount()
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const shortList = (item) => {
        dispatch({ type: "SHORTLIST", payload: item })
        alert(`'${item.title}' added to shortlist items`)
    }

    const removeItem = (id, title) => {
        dispatch({ type: "REMOVE_SHORTLIST", payload: id })
        alert(`'${title}' removed from shortlist items`)
    }

    useEffect(() => {
        localStorage.setItem('shortlist', JSON.stringify(state.shortListedItems))
        localStorage.setItem('shortlistCount', JSON.stringify(state.totalSelectedListings))
    }, [state.shortListedItems])

    return (
        <CartContext.Provider value={{ ...state, shortList, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}