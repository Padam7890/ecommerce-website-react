import React from 'react'
import imageUrl from '../../utils/imageurl'
import { BsHandbag } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { GrView } from "react-icons/gr";
import rating from "../../assets/img/Rating.png";

const Product = ({product,index}) => {
  return (
    <div
    key={product.id}
    className="product  group/edit relative h-[327px] border flex flex-col justify-between hover:border-green-500 hover:shadow-lg transition duration-300 border-gray-300 p-4"
  >
    <img
      className="w-[254px] h-[230px] object-cover"
      src={`${imageUrl.default}${product.images[0].url}`}
      alt={product.title}
    />
    {index === 0 && (
      <div className="absolute top-5">
        <div className="w-[80px] h-[27px] bg-[#EA4B48] rounded-md flex justify-center items-center">
          <p className="text-sm font-normal text-white">Sale 50%</p>
        </div>
      </div>
    )}

    {/* Hover show like and view */}
    <div className="hidden group-hover/edit:block absolute top-4 right-5">
      <div className=" flex flex-col gap-2 items-center">
        <div className=" cursor-pointer h-[40px] bg-white flex items-center justify-center w-[40px] border rounded-full">
          <IoMdHeartEmpty size={20} />
        </div>
        <div className=" cursor-pointer h-[40px] bg-white flex items-center justify-center w-[40px] border rounded-full">
          <GrView size={20} />
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-normal text-[#4D4D4D]">
          {product.product_title}
        </h4>
        <div>
          <span className="text-[#1A1A1A] font-medium text-base mr-1">
            ${product.regular_price}
          </span>
          <span className="text-[#999999] text-base line-through">
            ${product.sale_price}
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="w-[40px] flex items-center justify-center h-[40px] rounded-full bg-[#F2F2F2] transition duration-300 group-hover/edit:bg-[#00B207]">
          <BsHandbag className="group-hover/edit:text-white" />
        </div>
      </div>
    </div>
    <div className="rating">
      <img src={rating} alt="" />
    </div>
  </div>
  )
}

export default Product