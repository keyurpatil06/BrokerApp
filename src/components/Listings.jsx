import React, { useContext, useEffect } from 'react'
import FeaturedCard from './FeaturedCard'
import { listingsContext } from '../context/context'
import { useFilterContext } from '../context/Filter_context'
import Sort from './Sort'
import SearchSection from './SearchSection'

const Listings = () => {
  // const { listings } = useContext(listingsContext)
  const { filter_listings } = useFilterContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-gray-500 text-white pt-3' >
      <h1 className='text-3xl font-bold text-center mx-3 mb-3 p-3 bg-slate-800 rounded-xl'>Browse different properties</h1>
      <SearchSection height={20} />
      <div className="main-container md:flex">
        <div className="filters bg-slate-600">
          <Sort />
        </div>
        <div className='featured-items p-3 flex justify-around flex-wrap'>
          {filter_listings.length === 0 ? <p>No Listings Found</p> : filter_listings.map((item, index) => {
            // return <FeaturedCard id={item.listingID} key={index} title={item.title} mainImgSrc={item.mainImgSrc} price={item.price} details={item.details} />
            return <FeaturedCard key={index} item={item} />
          })}
        </div>
      </div>
    </div >
  )
}

export default Listings
