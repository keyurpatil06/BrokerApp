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
        <div className='filter-selection text-black p-3 text-center'>
            <form action='#'>
                <label htmlFor='sort'></label>
                <select name='sort' id='sort' onClick={sorting}>
                    <option value='lowest'>Price (lowest)</option>
                    <option value='highest'>Price (highest)</option>
                </select>
            </form>

            <div className='rooms-filter flex flex-col items-center'>
                <h1 className='text-white font-semibold bg-slate-900 w-full mt-2'>BHK Type</h1>
                {roomSizeData.map((item, index) => {
                    return <button
                        key={index}
                        type='button'
                        name='rooms'
                        value={item}
                        onClick={updateFilterValue}
                        className='text-white focus:bg-slate-500 w-full'>
                        {`${item === 'All' ? 'All' : item + ' BHK'}`}
                    </button>
                })}
            </div>

            <div className='bathrooms-filter flex flex-col items-center'>
                <h1 className='text-white font-semibold bg-slate-900 w-full my-2'>Bathrooms</h1>
                <form action='#'>
                    <label htmlFor='bathrooms'></label>
                    <select
                        name='bathrooms'
                        id='bathrooms'
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
                <button onClick={clearFilters} className='px-3 py-2 bg-black text-white rounded-xl cursor-pointer mx-auto font-semibold'>Clear Filter</button>
            </div>
        </div>
    )
}

export default Sort
