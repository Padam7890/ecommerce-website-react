import React from "react";

const Preheader = () => {
  return (
    <>
      <div className=" border-b-[1px] hidden lg:block ">
        <div className=" container mx-auto p-3">
          <div className="flex justify-between">
            <div className="left">
              <div className="location flex gap-2 items-center text-[#666666]">
                <i className="ri-map-pin-line text-xl"></i>
                <p className=" text-xs ">
                  Store Location: Lincoln- 344, Illinois, Chicago, USA
                </p>
              </div>
            </div>

            <div className="right flex items-center gap-4 text-xs text-[#666666] ">
              <div className="lang flex items-center gap-1">
                <p>Eng</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="usd flex items-center gap-1">
                <p>USD</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className=" w-[2px] h-4 bg-zinc-300"></div>
              <div className="usd  ">
                <p>Sign In / Sign Up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preheader;
