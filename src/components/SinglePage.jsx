import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePage = () => {
    const API = 'http://localhost:3000/generate'
    const { id } = useParams()
    const [singleListing, setSingleListing] = useState({})
    const [imgIndex, setImgIndex] = useState(0)

    const getSingleProduct = async (url) => {
        const res = await axios.get(url)
        const singleListingData = await res.data
        setSingleListing(singleListingData)
    }

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, [id])

    console.log(singleListing)

    const handleImgClick = (index) => {
        setImgIndex(index)
    }

    return (
        <>
            <div className='listing-area flex h-screen'>
                <div className='image-area flex'>
                    <div className='side-imgs p-4 bg-gray-500 flex flex-col justify-center items-center'>
                        {singleListing.otherImgs && singleListing.otherImgs.map((item, index) => {
                            return <div className='side-img m-1 cursor-pointer' key={index} onClick={() => handleImgClick(index)}>
                                <img className='h-20 rounded-xl border-4 border-white' src={`/${item}`} alt={`img-${index}`} />
                            </div>
                        })}
                    </div>
                    <div className='img-view flex justify-center items-center bg-gray-400 px-5'>
                        {singleListing.otherImgs && singleListing.otherImgs[imgIndex] && (
                            <img className='h-1/2 border-4 border-white rounded-xl' src={`/${singleListing.otherImgs[imgIndex]}`} alt='img' />
                        )}
                    </div>
                </div>

                <div className='info-area'>
                    <h1>{singleListing.apartmentName}</h1>
                </div>
            </div>
        </>
    )
}

export default SinglePage
