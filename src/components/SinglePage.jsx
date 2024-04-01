import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { listingsContext } from '../context/context'

const SinglePage = () => {
    const API = "http://localhost:3000/generate"
    const { getSingleProduct, singleListing, getProducts } = useContext(listingsContext)
    const { id } = useParams()

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
        getProducts(API)
    }, [])

    console.log(singleListing)

    return (
        <>
            <div className='listing-area'>
                <div className='image-area'>
                </div>
                <div className='info-area'></div>
            </div>
        </>
    )
}

export default SinglePage
