import React, { useContext } from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
  const data = {
    span: "Welcome To",
    title: "Broker App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam, rerum molestias perspiciatis magnam repellat saepe doloribus laudantium voluptatem corporis?"
  }

  return (
    <div className='h-[88vh] mt-[5rem] bg-gray-900 flex md:items-center'>
      <HeroSection props={data} />
    </div>
  )
}

export default About
