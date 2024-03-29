import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='bg-gray-900 text-white flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-9xl'>404</h1>
            <p className='text-xl'>The page you are looking for does not exist.</p>
            <NavLink to='/'>
                <button className='bg-white text-black rounded-xl px-3 py-2 my-3 font-bold outline-none'>Go back to Homepage</button>
            </NavLink>
        </div>
    )
}

export default ErrorPage
