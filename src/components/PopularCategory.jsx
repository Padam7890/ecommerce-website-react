import React from "react";
import http from "../utils/http";
import { NavLink } from "react-router-dom";
import usePopularCategories from "../customhook/usePopularCategories";
import { RingLoader } from "react-spinners";
import imageUrl from "../utils/imageurl";
import cryemoji from "../assets/gif/cry-tear.gif";

const PopularCategory = () => {
  const { popularCategories, loading, errortext } = usePopularCategories();

  return (
    <div className="container mx-auto mt-12">
      <div className="top-nav flex justify-between">
        <h3 className="text-3xl text-[#1A1A1A] font-semibold">
          Popular Categories
        </h3>
        <div className="viewall text-base font-medium  flex gap-2  text-[#00B207]">
          <NavLink to="/shop">View All</NavLink>
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-8 gap-4 items-center text-center">
        {errortext && (
          <div className="col-span-full flex flex-col items-center justify-center">
            <p>{errortext}</p>
            <img className=" w-40" src={cryemoji} alt="" />
          </div>
        )}
        {loading ? (
          <div className="col-span-6 flex justify-center items-center h-20">
            <RingLoader color="#00B207" />
          </div>
        ) : (
          popularCategories.map((category) => (
            <div key={category.id} className="relative">
              <div className="border border-gray-200 rounded-lg h-[213px] hover:border-green-500 hover:shadow-lg transition duration-300">
                {category.image && category.image.length > 0 && (
                  <img
                    src={`${imageUrl.default}${category.image[0].url}`}
                    alt={category.category_name}
                    className="w-full h-40 object-contain rounded-t-lg"
                  />
                )}
                <div className="p-4 font-medium text-base">
                  {category.category_name}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularCategory;
