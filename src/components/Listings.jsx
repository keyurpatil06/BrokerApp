import React, { useContext } from 'react'
import FeaturedCard from './FeaturedCard'
import { listingsContext } from '../context/context'

const Listings = () => {
  const { isLoading, listings } = useContext(listingsContext)

  return (
    <div className='featured-items p-3 flex justify-around flex-wrap'>
      {listings.map((item, index) => {
        return <FeaturedCard key={index} title={item.title} imgSrc={item.imgSrc} details={item.details} />
      })}
    </div>
  )
}

export default Listings
