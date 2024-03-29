import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const FeaturedCard = ({ title, imgSrc, details }) => {
    return (
        <div className='featured-item bg-[#76ABAE] border-2 border-[#222831] px-5 py-4 my-3 rounded-2xl'>
            <div className='title flex justify-center mb-2 bg-[#31363F] px-3 py-2 rounded-xl'>
                <span className='font-bold text-[#EEEEEE] text-xl text-cv'>{title}</span>
            </div>
            <div className='img-area my-1 w-full'>
                <img className='h-56 m-0.5 rounded-xl w-full' src={imgSrc} alt='Primary property image' />
            </div> 
            <div className='details my-2'>
                <div className='info my-2 flex justify-around items-center'>
                    {details.map((detail, index) => {
                        return <div key={index} className='bg-[#31363F] text-[#eeeeee] font-semibold rounded-lg px-4 py-2 m-1'>{detail}</div>
                    })}
                </div>
                <div className='btns my-1 flex justify-between items-center'>
                    <button className='px-3 py-2 mx-1 rounded-xl bg-black text-white w-3/4 font-semibold'>Schedule appointment</button>
                    <button className='bg-black p-3 rounded-xl w-1/4 flex justify-center'><FaRegHeart className='text-red-600' /></button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard
