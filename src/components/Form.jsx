import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react"

const Form = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0()

    const [form, setForm] = useState({
        listingID: '',
        title: '',
        // mainImgSrc: String,
        // otherImgs: [String],
        // details: [String],
        price: 0,
        size: 0,
        rooms: 0,
        bathrooms: 0,
        apartmentName: '',
        parking: false,
        featured: false,
        listerName: '',
        listerContact: '',
    })

    const [formArray, setFormArray] = useState([])
    const [selectedFile, setSelectedFile] = useState(null)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: newValue })
    }

    const handleFileChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const saveListingToDB = async () => {
        setForm({ ...form, listingID: uuidv4() })
        // setFormArray([...formArray, { ...form, listingID: uuidv4() }])
        await fetch("http://localhost:3000/uploadListing", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: form
        })
    }

    // console.log(formArray);

    return (
        <div className='bg-slate-600 lg:h-screen text-black p-4 flex flex-col items-center'>
            <h2 className='text-3xl bg-slate-400 rounded-xl text-center mx-auto py-2 font-bold w-full'>Enter Details</h2>

            <form onSubmit={handleSubmit} className='flex flex-col p-6 mt-8 mb-4 bg-slate-400 rounded-xl w-11/12 lg:w-1/2'>
                <input className='formInput' placeholder='Enter title' type='text' name='title' value={form.title} onChange={handleChange} />
                <input className='formInput' placeholder='Enter apartment name' type='text' name='apartmentName' value={form.apartmentName} onChange={handleChange} />
                <div className="numeric-inputs lg:flex lg:flex-wrap font-bold justify-between lg:w-[27rem]">
                    <label htmlFor="price" className='flex flex-col'>Price:
                        <input className='formInput' type='number' name='price' id='price' value={form.price} onChange={handleChange} />
                    </label>
                    <label htmlFor="size" className='flex flex-col'>Size (sqft):
                        <input className='formInput' type='number' name='size' id='size' value={form.size} onChange={handleChange} />
                    </label>
                    <label htmlFor="rooms" className='flex flex-col'>No. of Rooms:
                        <input className='formInput' type='number' name='rooms' id='rooms' value={form.rooms} onChange={handleChange} />
                    </label>
                    <label htmlFor="bathrooms" className='flex flex-col'>No. of Bathrooms:
                        <input className='formInput' type='number' name='bathrooms' id='bathrooms' value={form.bathrooms} onChange={handleChange} />
                    </label>
                </div>
                <label htmlFor="parking" className='font-bold accent-green-600'>Parking Available:
                    <input className='mx-2' placeholder='parking' type='checkbox' name='parking' id='parking' checked={form.parking} onChange={handleChange} />
                </label>
                <input className='formInput' placeholder='Enter ' type='file' name='file' multiple onChange={handleFileChange} />
                {/* --make a input for details here-- */}

                <h2 className='text-xl font-bold'>Contact Information</h2>
                <input className='formInput' placeholder='Enter your name' type='text' name='listerName' value={form.listerName} onChange={handleChange} />
                <input className='formInput' placeholder='Enter your phone number' type='text' name='listerContact' value={form.listerContact} onChange={handleChange} />

                {isAuthenticated ?
                    <button className='bg-black text-white mt-3 w-fit px-8 py-2 text-xl rounded-xl mx-auto' type='submit'>Submit</button> :
                    <button onClick={() => loginWithRedirect()} className='text-xl text-white font-semibold bg-green-700 w-fit px-6 py-2 mt-2 mx-auto rounded-xl'>Sign In to add a free listing!</button>
                }
            </form>
        </div>
    )
}

export default Form
