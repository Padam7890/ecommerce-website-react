import React from "react";
import { NavLink } from "react-router-dom";
import usePopularProducts from "../customhook/usePopularProduct";
import { RingLoader } from "react-spinners";
import cryemoji from "../assets/gif/cry-tear.gif";
import Product from "./smallComponents/Product";


const PopularProducts = () => {
  const { popularProduct, loading, errortext } = usePopularProducts();

  return (
    <div className="container mx-auto mt-12">
      <div className="top-nav flex justify-between">
        <h3 className="text-3xl text-[#1A1A1A] font-semibold">
          Popular Categories
        </h3>
        <div className="viewall text-base font-medium flex gap-2 text-[#00B207]">
          <NavLink to="/shop">View All</NavLink>
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8 gap-y-5 gap-x-5 items-center text-center">
        {errortext && (
          <div className="col-span-full flex flex-col items-center justify-center">
            <p>{errortext}</p>
            <img className=" w-40" src={cryemoji} alt="" />
          </div>
        )}
        {loading ? (
          <div className="col-span-full flex justify-center items-center h-20">
            <RingLoader color="#00B207" />
          </div>
        ) : (
          popularProduct.map((product, index) => (
           <Product index={index} product={product}/>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
