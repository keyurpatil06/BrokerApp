import React from 'react'
import { useCartContext } from '../context/Cart_context'
import FeaturedCard from './FeaturedCard'

const Cart = () => {
  const { shortListedItems } = useCartContext()

  return (
    <div className='bg-gray-500'>
      <h1 className='bg-slate-800 text-white text-3xl text-center p-4 font-serif font-bold'>ShortListed Listings</h1>
      <div className='shortlisted-items'>
        <div className='single-item flex flex-wrap justify-around'>
          {shortListedItems.length === 0 ? <p className='text-white text-xl p-4'>No Shortlisted Listings</p> : shortListedItems.map((item, index) => {
            return (
              <FeaturedCard key={index} item={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
