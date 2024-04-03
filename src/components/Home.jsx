import React, { useContext } from 'react'
import SearchSection from './SearchSection'
import FeaturedCard from './FeaturedCard'
import HeroSection from './HeroSection';
import { listingsContext } from '../context/context';

const Home = () => {
  const { isLoading, featureListings } = useContext(listingsContext)

  // const featuredListings = [
  //   {
  //     title: '3 BHK Listing Name at Location name',
  //     imgSrc: 'src/assets/house.jpg',
  //     details: ['2 BHK', 'Parking', 'lorem 1', 'lorem 2']
  //   },
  //   {
  //     title: '3 BHK Listing Name at Location name',
  //     imgSrc: 'src/assets/house.jpg',
  //     details: ['2 BHK', 'Parking', 'facility 1', 'facility 2']
  //   },
  //   {
  //     title: '3 BHK Listing Name at Location name',
  //     imgSrc: 'src/assets/house.jpg',
  //     details: ['2 BHK', 'Parking', 'lorem 1', 'lorem 2']
  //   },
  // ];

  const data = {
    span: "",
    title: "Broker App - Property Site",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam, rerum molestias perspiciatis magnam repellat saepe doloribus laudantium voluptatem corporis?"
  }

  return (
    <>
      {/* {console.log(featureListings)} */}
      <SearchSection />
      <div className='featured-section bg-gray-500 p-4'>
        <h1 className='text-3xl font-bold text-center my-3'>Featured Listings</h1>
        <div className='featured-items p-3 flex justify-around flex-wrap'>
          {featureListings.map((item, index) => {
            return <FeaturedCard key={index} id={item.listingID} title={item.title} mainImgSrc={item.mainImgSrc} details={item.details} />
          })}
        </div>
      </div>
      <HeroSection props={data} />
    </>
  )
}

export default Home
