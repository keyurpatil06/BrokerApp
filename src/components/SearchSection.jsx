import React from 'react'
import { useFilterContext } from '../context/Filter_context'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const SearchSection = ({ custom }) => {

  const { isAuthenticated, user } = useAuth0();
  const { filters: { text }, updateFilterValue } = useFilterContext()

  return (
    <div className={`search-section bg-gray-400 py-4 flex flex-col items-center justify-center ${custom ? 'h-[20vh] mx-[0.85rem] md:mx-3 rounded-xl mb-3 pt-0' : 'h-[35vh]'}`}>

      {isAuthenticated && <p className='font-semibold px-3 py-2 mt-4 md:m-0 rounded-xl text-xl bg-slate-900 text-white'>{`Hello, ${user.name}!`}</p>}

      <h1 className='text-3xl font-bold text-center my-3'>Search From Here</h1>
      <form action='#' onSubmit={(e) => { e.preventDefault() }} className='search-area w-full flex justify-center items-center'>
        <input
          className='bg-zinc-100 text-black outline-none px-4 py-2 w-1/2 rounded-xl '
          placeholder='Search properties here'
          type='text'
          name='text'
          id='search'
          value={text}
          onChange={updateFilterValue}
        />
        <NavLink to='/listings'>
          <button className='px-3 py-2 font-bold cursor-pointer bg-black text-white rounded-xl mx-2'>Go!</button>
        </NavLink>
      </form>
    </div>
  )
}

export default SearchSection
