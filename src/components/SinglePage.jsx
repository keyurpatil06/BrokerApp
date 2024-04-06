import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PriceFormat from './PriceFormat'
import { FaRegHeart } from 'react-icons/fa'
import { useCartContext } from '../context/Cart_context'

const SinglePage = () => {
    const API = 'http://localhost:3000/generate'
    const { id } = useParams()
    const [singleListing, setSingleListing] = useState({})
    const [imgIndex, setImgIndex] = useState(0)
    const { shortList, shortListedItems } = useCartContext()

    const getSingleProduct = async (url) => {
        const res = await axios.get(url)
        const singleListingData = await res.data
        setSingleListing(singleListingData)
    }

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // console.log(singleListing)

    return (
        <>
            <div className='listing-area lg:flex h-screen bg-gray-500'>
                <div className='image-area flex flex-col-reverse lg:flex-row min-w-[60vw]'>
                    <div className='side-imgs p-4 bg-gray-500 flex lg:flex-col justify-center'>
                        {singleListing.otherImgs && singleListing.otherImgs.map((item, index) => {
                            return <div className='side-img m-1 cursor-pointer' key={index} onClick={() => setImgIndex(index)}>
                                <img className='w-[150px] lg:w-[180px] rounded-xl border-4 border-white' src={`/${item}`} alt={`img-${index}`} />
                            </div>
                        })}
                    </div>
                    <div className='img-view flex justify-center items-center bg-gray-400 p-5 w-full'>
                        {singleListing.otherImgs && singleListing.otherImgs[imgIndex] && (
                            <img className='border-4 border-white rounded-xl' src={`/${singleListing.otherImgs[imgIndex]}`} alt='img' />
                        )}
                    </div>
                </div>

                <div className='info-area bg-gray-600 text-white flex flex-col w-full items-center justify-start'>
                    <h1 className='font-bold text-3xl p-3 my-4 bg-gray-500  text-center rounded-xl'>{singleListing.apartmentName}</h1>
                    <div className='amenities mt-2 mb-4'>
                        {singleListing.details && singleListing.details.map((item, index) => {
                            return <span key={index} className='bg-slate-800 mx-1 px-4 py-2 rounded-xl font-semibold'>{item}</span>
                        })}
                    </div>
                    <span className='textUtil'>{singleListing.size} sq.ft area</span>
                    <span className='textUtil'>{singleListing.rooms} Bedroom</span>
                    <span className='textUtil'>{singleListing.bathrooms} Bathroom</span>
                    <span className={`${singleListing.parking ? 'bg-green-500' : 'bg-red-600'} textUtil2`}>Parking {singleListing.parking ? 'Available' : 'Unavailable'}</span>
                    <span className='textUtil'>Rs. <PriceFormat price={singleListing.price} /></span>
                    <button onClick={() => { shortList(singleListing) }} className='bg-slate-900 px-3 py-2 my-3 flex justify-center items-center w-fit rounded-xl'>
                        <FaRegHeart className='text-red-600' /><span className='mx-2 font-bold'>Shortlist</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SinglePage
