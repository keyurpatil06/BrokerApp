import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import PriceFormat from './PriceFormat'
import { useCartContext } from '../context/Cart_context'

const FeaturedCard = ({ item }) => {
    const { shortList } = useCartContext()

    return (
        <>
            <div className='featured-item bg-gray-600 border-2 border-black px-5 py-4 md:mx-3 md:my-3 mb-3 rounded-2xl md:w-[450px]'>
                <NavLink to={`/singleListing/${item.listingID}`} >
                    <div className='primary'>
                        <div className='title mb-2 bg-gray-800 px-3 py-2 rounded-xl'>
                            <span className='font-bold text-gray-200 text-xl'>{item.title}</span>
                        </div>
                        <div className='img-area my-1 w-full'>
                            <img className='h-56 m-0.5 rounded-xl w-full' src={item.mainImgSrc} alt='image' />
                        </div>
                        <div className='details my-2 flex justify-around items-center'>
                            {item.details.map((detail, index) => {
                                return <button key={index} className='bg-gray-800 text-zinc-300 font-semibold rounded-lg px-2 md:px-4 py-2 m-1 whitespace-nowrap'>{detail}</button>
                            })}
                        </div>
                    </div>
                </NavLink >

                <div className='btns my-1 flex justify-between items-center'>
                    <button className='px-3 py-2 mx-1 rounded-xl bg-black text-white w-3/4 font-semibold'>Rs. <PriceFormat price={item.price} /></button>
                    <button onClick={() => { shortList(item) }} className='bg-black p-3 ml-2 rounded-xl flex justify-center w-1/4'><FaRegHeart className='text-red-600' /></button>
                </div>
            </div>
        </>
    )
}

export default FeaturedCard
