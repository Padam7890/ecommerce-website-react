import React, { useState } from "react";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // // Array of submenus with each index
  // const submenus = [
  //   {
  //     items: [
  //       { label: "Dashboard", link: "#" },
  //       { label: "Settings", link: "#" },
  //       { label: "Earnings", link: "#" },
  //       { label: "Sign out", link: "#" }
  //     ]
  //   },
  //   {
  //     items: [
  //       { label: "Submenu 1 Item 1", link: "#" },
  //       { label: "Submenu 1 Item 2", link: "#" },
  //       { label: "Submenu 1 Item 3", link: "#" }
  //     ]
  //   },
  //   // Add more submenu objects for each list item as needed
  // ];

  return (
    <nav className="container mx-auto flex flex-col">
      <ul className="flex flex-col md:flex-row pl-10 md:pl-0 md:items-center text-white gap-5 md:gap-10">
        {["Home", "Shop", "Pages", "Blog", "About Us", "Contact Us"].map(
          (val, index) => (
            <li
              key={index}
              onClick={() => toggleDropdown(index)}
              className={`navs__item ${
                index === 0 ? "text-white" : "text-gray-500"
              } inline-flex gap-1 items-center relative`}
            >
              <a className="navs__link text-sm font-medium" href="#">
                {val}
              </a>
              {/* {index <= 3 && <i className="ri-arrow-down-s-line"></i>}
              {activeDropdown === index && (
                <div className="z-20 bg-white absolute mt-20 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {submenus[index].items.map((submenuItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={submenuItem.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {submenuItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
