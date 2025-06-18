import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import SearchPage from "../pages/SearchPage";

const Nav = () => {
  const navigation = useNavigate();
  const onNavigateTree = (link: string) => {
    navigation(link, { replace: true });
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-[#1D1616] text-white p-2">
      <div className="flex items-center justify-between px-4 md:px-32">
        {/* Logo & Desktop Nav */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <img
            src={logo}
            alt="logo"
            className="w-[60px] md:w-[80px] object-cover"
          />
          <div className="hidden md:flex items-center space-x-6 font-semibold text-lg">
            <button onClick={() => onNavigateTree("/")}>Home</button>

            {/* Movie Dropdown */}
            <div className="relative group">
              <button className="px-2 py-1">Genre</button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <a
                  href="/action"
                  className="block px-4 py-2 text-black hover:bg-[#1D1616] hover:text-white"
                >
                  Action
                </a>
                <a
                  href="/animation"
                  className="block px-4 py-2 text-black hover:bg-[#1D1616] hover:text-white"
                >
                  Animation
                </a>
                <a
                  href="/adventure"
                  className="block px-4 py-2 text-black hover:bg-[#1D1616] hover:text-white"
                >
                  Adventure
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="px-2 py-1">Categories</button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <a
                  href="/upcoming"
                  className="block px-4 py-2 text-black hover:bg-[#1D1616] hover:text-white"
                >
                  Upcoming
                </a>
                <a
                  href="/popular"
                  className="block px-4 py-2 text-black hover:bg-[#1D1616] hover:text-white"
                >
                  Popular
                </a>
              </div>
            </div>

            <button onClick={() => onNavigateTree("/watchlist")}>
              Watchlist
            </button>
            <button onClick={() => onNavigateTree("/account")}>Account</button>
          </div>
        </div>

        {/* Search (desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => setIsSearchOpen(true)}>
            <div className="p-2 bg-white w-72 rounded-2xl flex items-center space-x-2 text-black">
              <FaSearch className="text-red-900 mx-2" size={20} />
              <span>Search for a movie</span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col px-4 space-y-2 mt-4 md:hidden font-semibold text-lg">
          <button onClick={() => onNavigateTree("/")}>Home</button>
          <div>
            <span className="block">Genre</span>
            <div className="ml-4 space-y-2 space-x-2 text-sm text-white">
              <a href="/action">Action</a>
              <a href="/animation">Animation</a>
              <a href="/adventure">Adventure</a>
            </div>
          </div>
          <div>
            <span className="block">Categories</span>
            <div className="ml-4 space-y-2 space-x-2 text-sm text-white">
              <a href="/upcoming">Upcoming</a>
              <a href="/popular">Popular</a>
            </div>
          </div>
          <button onClick={() => onNavigateTree("/watchlist")}>
            Watchlist
          </button>
          <button onClick={() => onNavigateTree("/account")}>Account</button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center space-x-2"
          >
            <FaSearch />
            <span>Search</span>
          </button>
        </div>
      )}

      {/* Search modal */}
      <SearchPage
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default Nav;
