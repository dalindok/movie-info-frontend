// import { FaSearch } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import { useState } from "react";

const Footer = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="flex flex-row justify-center space-x-24 items-center bg-[#1D1616] text-white p-6 f text-lg">
      <img src={logo} alt="" className="w-[100px] object-cover" />
      <div>
        <p className="font-bold">Movie Genre</p>
        <p className="font-extralight">Action</p>
        <p className="font-extralight">Animation</p>
        <p className="font-extralight">Adventure</p>
      </div>
      <div>
        <p className="font-bold">Categories</p>
        <p className="font-extralight">Up Coming</p>
        <p className="font-extralight">Popular</p>
        {/* <p className="font-extralight">Most Rated</p> */}
      </div>
      <div className="flex flex-row space-x-8 pr-32 items-center">
        <div className="flex flex-row space-x-8 pr-32 items-center">
          <button
            className="text-gray-300"
            onClick={() => setIsSearchOpen(true)}
          >
            <div className="p-2 bg-white w-72 rounded-2xl flex flex-row space-x-2 items-center">
              <FaSearch className="text-red-900 mx-2" size={20} />
              search for a movie
            </div>
          </button>
          <SearchPage
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
          {/* <p className="text-gray-300 "></p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
