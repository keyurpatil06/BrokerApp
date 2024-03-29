import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="bg-[#eeeeee] text-[#222831] flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-9xl">404</h1>
      <p className="text-xl mt-10">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="text-lg mt-2">Please recheck the URL!</p>
      <NavLink to="/">
        <button className=" mt-3 px-3 py-2 font-bold cursor-pointer bg-[#222831] text-white rounded-xl mx-2">
          Back to home
        </button>
      </NavLink>
    </section>
  );
};

export default ErrorPage;
