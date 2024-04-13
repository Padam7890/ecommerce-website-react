import React from "react";

const Button = ({ title, className ,onClick }) => {
  return (
    <div
     onClick={onClick}
      className={`btn cursor-pointer gap-4 bg-white font-semibold text-[#00B207] rounded-full  w-[191px] h-[51px] flex items-center justify-center ${className}`}
    >
      <p>{title}</p>
      <i className="ri-arrow-right-s-line"></i>
    </div>
  );
};

export default Button;
