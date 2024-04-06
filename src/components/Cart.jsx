import React from 'react'
import { useCartContext } from '../context/Cart_context'
import FeaturedCard from './FeaturedCard'

const Cart = () => {
  const { shortListedItems, totalSelectedListings, removeItem } = useCartContext()

  return (
    <div className={`bg-slate-500 ${shortListedItems.length < 4 ? 'md:h-[88vh]' : 'h-fit'}`}>
      <h1 className='bg-slate-800 text-white text-3xl text-center p-4 font-serif font-bold'>{`ShortListed Listings: ${totalSelectedListings}`}</h1>
      <div className={`shortlisted-items ${shortListedItems.length < 2 ? 'h-[85vh]' : 'h-fit'}`}>
        <div className='single-item flex flex-wrap justify-around'>
          {shortListedItems.length === 0 ? <p className='text-white text-xl p-4'>No Shortlisted Listings</p> : shortListedItems.map((item, index) => {
            return (
              <div key={index} className='bg-gray-900 text-white flex flex-col items-center m-2 p-1 rounded-[1.25rem] border-2 border-white'>
                <FeaturedCard item={item} />
                <button onClick={() => { removeItem(item.listingID, item.title) }} className='bg-red-600 w-[95%] text-center p-2 mb-2 rounded-xl font-semibold'>Remove Listing</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
