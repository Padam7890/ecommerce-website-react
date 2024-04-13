import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { RiMenuLine } from "react-icons/ri";
import Nav from "./Nav";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mt-5">
      <header className="flex flex-col overflow-hidden">
        <div className="container mx-auto top__header md:gap-4 gap-5 flex flex-col md:flex md:flex-row justify-between items-center">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-20 items-center">
            <div className="search md:w-[400px] flex relative">
              <div className="searchinput w-full">
                <input
                  className="border w-full rounded-md h-[45px] p-6 outline-none"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="button absolute right-0 top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2">
                <button className="bg-primary font-semibold h-[50px] w-28 rounded-e-2xl text-white">
                  Search
                </button>
              </div>
            </div>
            {/* Mobile menu with icon */}
            <div className="md:hidden flex justify-end items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <RiMenuLine size={30} />
              </button>
            </div>
          </div>

          <div className="cart__love hidden lg:flex items-center gap-4">
            <div className="love__icon">
              <i className="ri-heart-3-line text-4xl"></i>
            </div>
            <div className="w-[2px] h-7 bg-zinc-300"></div>
            <div className="cart__icon">
              <i className="ri-shopping-bag-line text-4xl"></i>
            </div>
            <div className="shopping_text flex flex-col gap-1">
              <p className="text-gray-700 text-[12px]">Shopping cart:</p>
              <p className="font-medium text-[14px]">$400.00</p>
            </div>
          </div>
        </div>

        {/* laptop menu and desktop Menu */}
        <div className="w-full hidden md:flex bg-gray-800  h-12 mt-5  items-center ">
              <Nav/>
        </div>

        {/* Mobile Menu  */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
            <div className="flex flex-col h-full bg-white w-3/4 max-w-sm transform transition-all ease-in-out duration-1000">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <RxCross1 size={20} />
                </button>
              </div>
              <Nav/>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
