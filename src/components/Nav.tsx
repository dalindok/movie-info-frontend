import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchPage from "../pages/SearchPage";

const Nav = () => {
  const navigation = useNavigate();
  const onNavigateTree = (link: string) => {
    navigation(link, { replace: true });
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div
      className="justify-between flex  bg-[#1D1616]
     text-white p-2 "
    >
      <div className="flex flex-row space-x-8 pl-32 items-center font-semibold text-lg">
        <img src={logo} alt="logo" className="w-[80px] object-cover" />
        {/* <div className="flex flex-row space-x-8"> */}
        <button onClick={() => onNavigateTree("/")}>Home</button>
        <>
          <div className="relative group inline-block z-20">
            {/* Button */}
            <button className=" text-white px-4 py-2 rounded-md">Movie</button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
              <a
                href="/action"
                className="block px-4 py-2 text-black hover:text-white hover:bg-[#1D1616]"
              >
                Action
              </a>
              <a
                href="/animation"
                className="block px-4 py-2 text-black hover:text-white hover:bg-[#1D1616]"
              >
                Animation
              </a>
              <a
                href="/adventure"
                className="block px-4 py-2 text-black hover:text-white hover:bg-[#1D1616]"
              >
                Adventure
              </a>
            </div>
          </div>
          <button onClick={() => onNavigateTree("/watchlist")}>
            Watchlist
          </button>
          <button onClick={() => onNavigateTree("/account")}>Account</button>
        </>
        {/* </div> */}
      </div>
      <div className="flex flex-row space-x-8 pr-32 items-center">
        <button className="text-gray-300" onClick={() => setIsSearchOpen(true)}>
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
  );
};

export default Nav;
