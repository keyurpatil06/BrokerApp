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
        details: [],
        price: 0,
        size: 0,
        rooms: 0,
        bathrooms: 0,
        apartmentName: '',
        parking: false,
        featured: false,
        listerName: '',
        listerContact: '',
        otherImgs: [],
    })

    // const [formArray, setFormArray] = useState([])
    // const [selectedFile, setSelectedFile] = useState(null)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: newValue })
    }

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        const filePromises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        });
        
        try {
            const base64Images = await Promise.all(filePromises);
            // console.log(base64Images);
            setForm({ ...form, otherImgs: base64Images });
        } catch (error) {
            console.error('Error reading files:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);

        try {
            const response = await axios.post('http://localhost:3000/uploadListing', form);
            console.log('Listing uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading listing:', error);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // setForm({ ...form, listingID: uuidv4() })
    //     console.log(form);

    //     try {
    //         const response = await axios.post('http://localhost:3000/uploadListing', form);
    //         console.log('Listing uploaded successfully:', response.data);
    //     } catch (error) {
    //         console.error('Error uploading listing:', error);
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('title', form.title);
    //         formData.append('details', form.details);
    //         formData.append('price', form.price);
    //         formData.append('size', form.size);
    //         formData.append('rooms', form.rooms);
    //         formData.append('bathrooms', form.bathrooms);
    //         formData.append('apartmentName', form.apartmentName);
    //         formData.append('parking', form.parking);
    //         formData.append('featured', form.featured);
    //         formData.append('listerName', form.listerName);
    //         formData.append('listerContact', form.listerContact);
    //         formData.append('otherImgs', form.otherImgs);

    //         // form.images.forEach((image, index) => {
    //         //     formData.append(`images${index}`, image);
    //         // });

    //         const response = await axios.post('http://localhost:3000/uploadListing', formData);
    //         console.log('Listing uploaded successfully:', response.data);
    //     } catch (error) {
    //         console.error('Error uploading listing:', error);
    //     }
    // }

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
                <input className='formInput' type="file" name="otherImgs" accept="image/*" multiple onChange={handleFileChange} />
                <input className='formInput' placeholder='Enter details(comma seperated - Any 4)' type='text' name='details' value={form.details} onChange={handleChange} />

                <h2 className='text-xl font-bold'>Contact Information</h2>
                <input className='formInput' placeholder='Enter your name' type='text' name='listerName' value={form.listerName} onChange={handleChange} />
                <input className='formInput' placeholder='Enter your phone number' type='text' name='listerContact' value={form.listerContact} onChange={handleChange} />

                {/* {isAuthenticated ?
                    <button className='bg-black text-white mt-3 w-fit px-8 py-2 text-xl rounded-xl mx-auto' type='submit'>Submit</button> :
                    <button onClick={() => loginWithRedirect()} className='text-xl text-white font-semibold bg-green-700 w-fit px-6 py-2 mt-2 mx-auto rounded-xl'>Sign In to add a free listing!</button>
                } */}
                <button className='bg-black text-white mt-3 w-fit px-8 py-2 text-xl rounded-xl mx-auto' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
// https://www.youtube.com/watch?v=ijx0Uqlo3NA