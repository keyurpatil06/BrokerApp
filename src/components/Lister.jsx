import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Lister = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0()

    return (
        <div className='bg-slate-700 p-4 text-white text-center mx-auto'>
            <div className='bg-slate-800 mx-auto px-3 py-2 mb-1 rounded-xl'>
                <h2 className='text-3xl'>Are you a Property owner?</h2>
                <p className='text-xl'>Post a free Listing!</p>
            </div>
            {isAuthenticated ?
                <NavLink to='/form'>
                    <button className='text-xl bg-green-700 px-6 py-2 mt-2 rounded-xl'>Add a Listing!</button>
                </NavLink> :
                <button onClick={() => loginWithRedirect()} className='text-xl bg-green-700 w-fit px-6 py-2 mt-2 mx-auto rounded-xl'>Sign In to add a free listing!</button>
            }
        </div>
    )
}

export default Lister
