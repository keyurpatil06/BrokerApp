import React from 'react'

const SearchSection = () => {
  return (
    <div className='search-section bg-gray-400 py-4 h-[40vh] flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-center my-3'>Search Form Here</h1>
      <div className='search-area w-full flex justify-center items-center'>
        <input className='bg-zinc-100 outline-none px-4 py-2 w-1/2 rounded-xl ' placeholder='Search properties here' type='text' name='search' id='search' />
        <button className='px-3 py-2 font-bold cursor-pointer bg-black text-white rounded-xl mx-2'>Search</button>
      </div>
    </div>
  )
}

export default SearchSection
