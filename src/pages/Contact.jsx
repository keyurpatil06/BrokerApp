import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    <div className='bg-gray-800 mt-[5rem] h-[88vh]'>
      <div className='p-3 bg-gray-900'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15081.631946741445!2d72.89440476315677!3d19.089749591647177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d5275e629%3A0x16b91bb144a76288!2sGhatkopar%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712671389045!5m2!1sen!2sin" className='w-full h-[50vh]' style={{ 'border': 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className=' py-3 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold my-2 text-white'>Contact Us</h2>
        <form action='https://formspree.io/f/mbjnzeqq' method='post' className='flex flex-col items-start'>
          <input className='inputStyle' type='text' value={isAuthenticated ? user.name : 'sign-in required'} name='name' required autoComplete='off' />
          <input className='inputStyle' type='text' value={isAuthenticated ? user.email : 'sign-in required'} name='email' required autoComplete='off' />
          <textarea className='inputStyle' name='message' required autoComplete='off' placeholder='Enter your message'></textarea>
          <input className='px-3 py-2 bg-white text-black rounded-xl font-semibold mx-auto mt-1 mb-3 cursor-pointer' type='submit' value='Send' />
        </form>
      </div>
    </div>
  )
}

export default Contact
