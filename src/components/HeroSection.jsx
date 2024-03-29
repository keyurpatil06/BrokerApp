import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({ props }) => {
    return (
        <div className='flex flex-col md:flex-row bg-gray-900 py-5'>
            <div className='flex flex-col justify-center left bg-black text-white border-4 rounded-xl mx-6 my-0.5 p-7'>
                <div>
                    <span className='text-xl'>{props.span}</span>
                    <h1 className='text-5xl'>{props.title}</h1>
                </div>
                <p className='my-2'>{props.desc}</p>
                <NavLink to='/listings'>
                    <button className='bg-white text-black rounded-xl px-3 py-2 my-1 font-semibold outline-none'>View Listings</button>
                </NavLink>
            </div>
            <div className='right border-4 rounded-xl mx-6 mt-4 md:mt-0 md:mr-8'>
                <figure>
                    <img className='rounded-xl' src="/src/assets/house2.jpg" alt="display-img" />
                </figure>
            </div>
        </div>
    )
}

export default HeroSection
