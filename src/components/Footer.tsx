// import { FaSearch } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import { useState } from "react";

const Footer = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="bg-[#1D1616] text-white px-6 py-10 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-7xl mx-auto space-y-10 md:space-y-0 md:space-x-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="w-[100px] object-cover mx-auto md:mx-0"
          />
        </div>

        {/* Movie Genre */}
        <div>
          <p className="font-bold text-lg mb-2">Movie Genre</p>
          <p className="font-extralight">Action</p>
          <p className="font-extralight">Animation</p>
          <p className="font-extralight">Adventure</p>
        </div>

        {/* Categories */}
        <div>
          <p className="font-bold text-lg mb-2">Categories</p>
          <p className="font-extralight">Upcoming</p>
          <p className="font-extralight">Popular</p>
          {/* <p className="font-extralight">Most Rated</p> */}
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button
            className="text-gray-300 w-full max-w-md"
            onClick={() => setIsSearchOpen(true)}
          >
            <div className="p-2 bg-white rounded-2xl flex flex-row space-x-2 items-center w-full">
              <FaSearch className="text-red-900 mx-2" size={20} />
              <span className="text-black">Search for a movie</span>
            </div>
          </button>
          <SearchPage
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
