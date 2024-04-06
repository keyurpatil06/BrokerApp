import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='p-3 bg-gray-900'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4868614204906!2d72.88482477595834!3d19.08628595164817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87d56a2f271%3A0xbccf3a6c23c917fa!2sPHOENIX%20MARKETCITY%2C%20Kurla%20West%2C%20Kurla%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1711557107549!5m2!1sen!2sin' className='w-full h-[50vh]' style={{ 'border': 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>

      <div className='bg-gray-800 py-3 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold my-2 text-white'>Contact Us</h2>
        <form action='https://formspree.io/f/mbjnzeqq' method='post' className='flex flex-col items-start'>
          <input className='inputStyle' type='text' placeholder='Enter your username' name='name' required autoComplete='off' />
          <input className='inputStyle' type='text' placeholder='Enter your email' name='email' required autoComplete='off' />
          <textarea className='inputStyle' name='message' required autoComplete='off' placeholder='Enter your message'></textarea>
          <input className='px-3 py-2 bg-white text-black rounded-xl font-semibold mx-auto mt-1 mb-3 cursor-pointer' type='submit' value='Send' />
        </form>
      </div>
    </>
  )
}

export default Contact
