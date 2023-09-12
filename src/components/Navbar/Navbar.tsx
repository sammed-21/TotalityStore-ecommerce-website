import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useRecoilValue } from "recoil";
import { getNumberOfCart } from "../../state/selectors/selectors";
import { useGoogleLogin, googleLogout  } from "@react-oauth/google";
import { UserProfile } from "../../utils/types";
import toast, { Toaster } from 'react-hot-toast';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const currentCartLength = useRecoilValue(getNumberOfCart);
  
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const toggleMenu = () => {
    setIsDropdownMenu((prev) => !prev);
  };
  const handelDropDown = () => {
    console.log("clicked");
    setIsOpen((prev) => !prev);
  };

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
 
   

  
 
  // Function to fetch user data
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      toast.success('Successfully LoggedIn!');
      // Use the access token to fetch user profile
      fetchUserProfile(codeResponse.access_token);
    },
  });

  const fetchUserProfile = async (accessToken: string) => {
    try {
      const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);
      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
      } else {
        console.error("Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  
  const handleSignOut = () => {
    googleLogout();
    toast('Successfully LoggedOut!');
    setUserProfile(null)
    toggleDropdown()
  }
  
  return (
    <>
      <nav className="bg-gray-200 shadow-2xl  backdrop-filter backdrop-blur-lg sticky top-0 z-10 bg-opacity-30 border-b   max-sm:flex-col border-gray-200 text-black ">
        <div className="min-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4 max-sm:py-3 max-sm:p-2  border-gray-500 px-9">
          <div className="flex gap-9 ">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                <Link to="/">TotalityStore</Link>
              </span>
            </a>
            <div
              className={`items-center    justify-between ${
                isDropdownMenu
                  ? "flex max-md:absolute max-md:top-[4.5rem] max-md:shadow-lg max-md:left-0 max-md:w-full max-md:items-center bg-white "
                  : "hidden "
              }   w-full md:flex md:w-auto`}
              id="navbar-user"
            >
              <ul
                className="flex z-50 transition-all  backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white ease-in-out duration-300 delay-300 flex-col w-full font-medium p-4 md:p-0    rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white "
                onClick={toggleMenu}
              >
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
          </div>
          <div className="flex md:flex md:gap-9">
            <div className="flex relative items-center gap-10 max-sm:gap-0">
              {userProfile === null ? (
                <button className="bg-transparent px-3 py-2 rounded-lg font-bold border-2 border-blue-600 " onClick={() => login()}>Sign In</button>
              ) : (
                <button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    src={userProfile?.picture || ""}
                   
                    className="h-8 rounded-full "
                    alt="Flowbite Logo"
                  />
                </button>
              )}
              {/* Dropdown menu */}
              <div
                className={`z-50 ${
                  isDropdownOpen ? "flex flex-col" : "hidden"
                } my-4 top-10 right-1 text-base list-none absolute  bg-white divide-y divide-gray-100 rounded-lg shadow `}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 ">
                  {userProfile?.name || 'sammed'  }
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    {userProfile?.email || 'sammed2110@gmail.com' }
                  </span>
                </div>
                <button type="button" onClick={() => handleSignOut()}>Sign Out</button>
              </div>
              <div className="relative" onClick={() => handelDropDown()}>
                <AiOutlineShoppingCart size={30} />
                <span className="absolute -right-2 -top-3 items-center flex justify-center  text-md h-6 w-6 rounded-full bg-blue-700 text-white">
                  {currentCartLength}
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
        
      </nav>
      {isOpen && (
        <div className=" overflow-y-auto ">
          <ShoppingCart isOpen={isOpen} onClose={handelDropDown} userProfile={userProfile} />
        </div>
      )}
      <Toaster/>
    </>
  );
};

export default Navbar;
