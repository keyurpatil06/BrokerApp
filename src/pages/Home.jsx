import React, { useContext } from 'react'
import SearchSection from '../components/SearchSection'
import FeaturedCard from '../components/FeaturedCard'
import HeroSection from '../components/HeroSection';
import { listingsContext } from '../context/context';
import Lister from '../components/Lister';

const Home = () => {
  const { featureListings } = useContext(listingsContext)

  const data = {
    span: "",
    title: "Broker App - Property Site",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam, rerum molestias perspiciatis magnam repellat saepe doloribus laudantium voluptatem corporis?"
  }

  return (
    <>
      {/* {console.log(featureListings)} */}
      <SearchSection />
      <Lister />
      <div className='featured-section bg-gray-500 p-4'>
        <h1 className='text-3xl font-bold text-center my-3'>Featured Listings</h1>
        <div className='featured-items p-3 flex justify-around flex-wrap'>
          {featureListings.map((item, index) => {
            return <FeaturedCard key={index} item={item} />
          })}
        </div>
      </div>
      <HeroSection props={data} />
    </>
  )
}

export default Home
