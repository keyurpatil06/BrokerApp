import React, { useEffect } from 'react'
import FeaturedCard from './FeaturedCard'
import { useFilterContext } from '../context/Filter_context'
import Sort from './Sort'
import SearchSection from './SearchSection'
import { FaAngleUp } from 'react-icons/fa'

const Listings = () => {
  const { filter_listings } = useFilterContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-gray-500 text-white pt-3' >
      <h1 className='text-3xl font-bold text-center mx-3 mb-3 p-3 bg-slate-800 rounded-xl'>Browse different properties</h1>
      <button className='fixed bottom-3 right-3 bg-black p-3 rounded-xl opacity-70' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><FaAngleUp className='text-white' /></button>
      <SearchSection custom={true} />
      <div className='main-container md:flex'>
        <div className='filters bg-slate-600 ml-3 mb-3 mr-3 md:mr-0 rounded-xl'>
          <Sort />
        </div>
        <div className='featured-items p-3 flex justify-around flex-wrap'>
          {filter_listings.length === 0 ? <p>No Listings Found</p> : filter_listings.map((item, index) => {
            return <FeaturedCard key={index} item={item} />
          })}
        </div>
      </div>

    </div >
  )
}

export default Listings
