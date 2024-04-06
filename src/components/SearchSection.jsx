import React from 'react'
import { useFilterContext } from '../context/Filter_context'
import { NavLink } from 'react-router-dom'

const SearchSection = ({ height }) => {

  const { filters: { text }, updateFilterValue } = useFilterContext()

  return (
    <div className={`search-section bg-gray-400 py-4 flex flex-col items-center justify-center ${height === 20 ? 'h-[20vh]' : 'h-[35vh]'}`}>
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
