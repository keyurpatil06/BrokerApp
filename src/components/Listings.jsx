import React, { useContext } from 'react'
import FeaturedCard from './FeaturedCard'
import { listingsContext } from '../context/context'

const Listings = () => {
  const { listings } = useContext(listingsContext)

  return (
    <div className='bg-gray-500 text-white pt-3'>
      <h1 className='text-3xl font-bold text-center mx-3 p-3 bg-slate-800 rounded-xl'>Browse different properties</h1>
      <div className='featured-items p-3 flex justify-around flex-wrap'>
        {listings.map((item, index) => {
          return <FeaturedCard id={item.listingID} key={index} title={item.title} imgSrc={item.imgSrc} details={item.details} />
        })}
      </div>
    </div>
  )
}

export default Listings
