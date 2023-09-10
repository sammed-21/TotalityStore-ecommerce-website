import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const toggleMenu = () => {
    setIsDropdownMenu((prev) => !prev);
  };

  return (
    <nav className="bg-gray-200 shadow-2xl  backdrop-filter backdrop-blur-lg sticky top-0 z-10 bg-opacity-30 border-b   max-sm:flex-col border-gray-200 text-black ">
      <div className="min-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4 border-b-2 border-gray-500 px-9">
        <div className="flex gap-9 ">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <Link to="/">Totality</Link>
            </span>
          </a>
          <div
            className={`items-center    justify-between ${
              isDropdownMenu
                ? "flex max-md:absolute max-md:top-[7rem] max-md:shadow-lg max-md:left-0 max-md:w-full max-md:items-center bg-white "
                : "hidden "
            }   w-full md:flex md:w-auto`}
            id="navbar-user"
          >
            <ul  className="flex z-50 transition-all  backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white ease-in-out duration-300 delay-300 flex-col w-full font-medium p-4 md:p-0    rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white " onClick={toggleMenu}>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent "
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent "
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex md:gap-9">
          

          <div className="flex relative items-center gap-10 max-sm:gap-0">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 "
                alt="Flowbite Logo"
              />
            </button>
            {/* Dropdown menu */}
            <div
              className={`z-50 ${
                isDropdownOpen ? "flex flex-col" : "hidden"
              } my-4 top-10 right-1 text-base list-none absolute  bg-white divide-y divide-gray-100 rounded-lg shadow `}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 ">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative">
              <AiOutlineShoppingCart size={30} />
              <span className="absolute -right-2 -top-3 items-center flex justify-center  text-md h-6 w-6 rounded-full bg-blue-700 text-white">
                0
              </span>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              // className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
          </div>
          <div
            className="items-center  w-full flex justify-center "
            id="navbar-user"
          >
            <ul className="  flex   rounded-xl">
              <li>
                <Link
                  to="/products/1"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent "
                  aria-current="page"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/products/2"
                  className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent "
                  aria-current="page"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/products/3"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent "
                  aria-current="page"
                >
                  Children
                </Link>
              </li>
            </ul>
          </div>
    </nav>
  );
};

export default Navbar;
