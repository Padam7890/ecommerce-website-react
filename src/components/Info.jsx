import React from "react";
import shipping from "../assets/icons/truck.png";
import headphones from "../assets/icons/headphone.png";
import bag from "../assets/icons/sbag.png";
import packageIcon from "../assets/icons/package.png";

const Info = () => {
  const arrayItems = [
    {
      tittle: "Free Shipping",
      subTitle: "Free shipping on all your order",
      icon: shipping,
    },

    {
      tittle: "Customer Support 24/7",
      subTitle: "Instant access to Support",
      icon: headphones,
    },
    {
      tittle: "100% Secure Payment",
      subTitle: "We ensure your money is save",
      icon: bag,
    },
    {
      tittle: "Money-Back Guarantee",
      subTitle: "30 Days Money-Back Guarantee",
      icon: packageIcon,
    },
  ];

  return (
    <div className="container mt-9 mx-auto hidden lg:block  ">
      <div className="bg-white rounded-lg flex justify-between items-center h-[128px] mb-5 shadow-[0_1px_15px_rgb(0,0,0,0.1)] p-6">
        {arrayItems.map((item, index) => (
          <div key={index} className="flex items-center  gap-4">
            <div className="icon">
              <img src={item.icon} alt={item.tittle} />
            </div>
            <div className="text">
              <h5 className=" text-[#1A1A1A] font-semibold text-base">
                {item.tittle}
              </h5>
              <p className="text-sm text-gray-400  font-light">
                 {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
