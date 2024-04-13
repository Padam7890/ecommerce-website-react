import React from "react";
import firstbanner from "../assets/img/firstbanner.png";
import secondbanner from "../assets/img/second.png";
import thirdbanner from "../assets/img/third.png";
const Hero = () => {
  return (
    <div className="hero_section mt-9">
      <div className="container mx-auto flex gap-4 md:gap-5 lg:gap-5 justify-between ">
        <div
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${firstbanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="md:w-[900px] h-[600px] w-full  flex items-center rounded-lg pt-9 relative"
        >
          <div className="content flex flex-col gap-10 justify-center px-8">
            <h2 className=" font-semibold text-white text-5xl leading-[120%] max-w-96 ">
              Fresh & Healthy Organic Food
            </h2>
            <div className="mid-content  flex gap-4 items-center  text-white">
              <div className="h-16 w-[2px]  bg-[#84D187] "></div>
              <div className=" flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <p>Sale up to</p>
                  <button className=" bg-[#FF8A00] px-2 py-2 rounded-md ">
                    {" "}
                    30% OFF
                  </button>
                </div>
                <p className="  text-sm font-[200] opacity-90 ">
                  Free shipping on all your order.
                </p>
              </div>
            </div>
            <div className="btn cursor-pointer gap-4 bg-white font-semibold text-[#00B207] rounded-full  w-[191px] h-[51px] flex items-center justify-center  ">
              <p> Shop Now</p>
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>

        <div className="second hidden md:flex md:flex-col gap-5">
          <div
            style={{
              backgroundImage: `url(${secondbanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="top-banner rounded-lg object-cover w-[423px] h-[288px] flex items-center"
          >
            <div className=" flex flex-col gap-4 pl-5 ">
              <div className="flex  flex-col gap-2">
                <p className=" font-medium text-sm  "> SUMMER SALE</p>
                <h5 className="font-semibold text-4xl">75% OFF</h5>
                <p className=" text-sm text-gray-600">Only Fruit & Vegetable</p>
              </div>
              <div className=" flex gap-2 text-[#00B207] font-medium text-base">
                <p className=" "> Shop Now</p>
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </div>
          </div>

          <div className="bottom-banner">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${thirdbanner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                
              }}
              className="top-banner rounded-lg object-cover w-[423px] text-center h-[288px] flex items-center justify-center"
            >
              <div className=" flex flex-col gap-4 text-center ">
                <div className=" text-white ">
                  <p className="  text-sm font-medium">BEST DEAL</p>
                  <h3 className=" text-3xl max-w-[300px] font-semibold mt-2 leading-[120%">Special Products Deal of the Month</h3>
                </div>

                <div className =" text-[#00B207] text-base font-semibold flex gap-3 items-center justify-center ">
                  <p>Shop Now</p>
                  <i className="ri-arrow-right-s-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
