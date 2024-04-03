import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const FeaturedCard = ({ id, title, mainImgSrc, details }) => {
    return (
        <NavLink to={`/singleListing/${id}`} >
            <div className='featured-item bg-gray-600 border-2 border-black px-5 py-4 my-3 rounded-2xl'>
                <div className='title mb-2 bg-gray-800 px-3 py-2 rounded-xl'>
                    <span className='font-bold text-gray-200 text-xl'>{title}</span>
                </div>
                <div className='img-area my-1 w-full'>
                    <img className='h-56 m-0.5 rounded-xl w-full' src={mainImgSrc} alt='image' />
                </div>
                <div className='details my-2'>
                    <div className='info my-2 flex justify-around items-center'>
                        {details.map((detail, index) => {
                            return <button key={index} className='bg-gray-800 text-zinc-300 font-semibold rounded-lg px-2 md:px-4 py-2 m-1'>{detail}</button>
                        })}
                    </div>
                    <div className='btns my-1 flex justify-between items-center'>
                        <button className='px-3 py-2 mx-1 rounded-xl bg-black text-white w-3/4 font-semibold'>Schedule appointment</button>
                        <button className='bg-black p-3 rounded-xl w-1/4 flex justify-center'><FaRegHeart className='text-red-600' /></button>
                    </div>
                </div>
            </div>
        </NavLink >
    )
}

export default FeaturedCard
