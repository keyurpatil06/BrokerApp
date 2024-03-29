import React from "react";

const SearchSection = () => {
  return (
    <div className="search-section bg-[#EEEEEE] py-3 h-[20vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center my-3 ">Search From Here</h2>
      <div className="search-area w-full flex justify-center items-center">
        <input
          className="bg-zinc-100 outline-[#31363F] px-4 py-2 w-1/2 rounded-xl "
          placeholder="Search properties here"
          type="text"
          name="search"
          id="search"
        />
        <button className="px-3 py-2 font-bold cursor-pointer bg-[#222831] text-white rounded-xl mx-2">
          Go!
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
