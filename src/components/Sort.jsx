import React from 'react'
import { useFilterContext } from '../context/Filter_context'

const Sort = () => {
    const { filters: { rooms }, all_listings, filter_listings, sorting, updateFilterValue, clearFilters } = useFilterContext()
    let newVal;

    const getUniqueData = (data, property) => {
        newVal = data.map((item) => {
            return item[property]
        })

        let unique = [...new Set(newVal)]
        return (newVal = ['All', ...unique.sort()])
        // console.log(newVal);
    }

    const roomSizeData = getUniqueData(all_listings, 'rooms')
    const bathroomsData = getUniqueData(all_listings, 'bathrooms')

    return (
        <div className='filter-selection text-black p-3 my-6 md:my-0 text-center sticky top-0'>
            <form action='#'>
                <label htmlFor='sort'></label>
                <select name='sort' id='sort' onClick={sorting} className='bg-black text-white px-2 py-1.5 rounded-lg outline-none'>
                    <option value='lowest'>Price (lowest)</option>
                    <option value='highest'>Price (highest)</option>
                </select>
            </form>

            <div className='rooms-filter flex flex-col items-center'>
                <h1 className='text-white font-semibold bg-slate-900 w-full mt-2 py-1 rounded-lg'>BHK Type</h1>
                {roomSizeData.map((item, index) => {
                    return <button
                        key={index}
                        type='button'
                        name='rooms'
                        value={item}
                        onClick={updateFilterValue}
                        className='text-white focus:bg-slate-700 hover:bg-slate-500 w-full'>
                        {`${item === 'All' ? 'All' : item + ' BHK'}`}
                    </button>
                })}
            </div>

            <div className='bathrooms-filter flex flex-col items-center'>
                <h1 className='text-white font-semibold bg-slate-900 w-full my-2 py-1 rounded-lg'>Bathrooms</h1>
                <form action='#'>
                    <label htmlFor='bathrooms'></label>
                    <select
                        name='bathrooms'
                        id='bathrooms'
                        className='bg-black text-white px-2 py-1 outline-none rounded-lg'
                        onClick={updateFilterValue}>
                        {
                            bathroomsData.map((item, index) => {
                                return <option key={index} value={item} name='bathrooms'>{item}</option>
                            })
                        }
                    </select>
                </form>
            </div>

            <div className='clear-filter text-center my-2'>
                <button onClick={clearFilters} className='px-3 py-2 hover:bg-black bg-slate-900 text-white rounded-xl cursor-pointer mx-auto font-semibold'>Clear Filter</button>
            </div>
        </div>
    )
}

export default Sort
