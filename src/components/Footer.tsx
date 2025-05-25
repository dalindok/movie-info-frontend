import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center space-x-24 items-center bg-[#1D1616] text-white p-6 f text-lg">
      <img src={logo} alt="" className="w-[100px] object-cover" />
      <div>
        <p className="font-bold">Movie</p>
        <p className="font-extralight">Action</p>
        <p className="font-extralight">Comedy</p>
        <p className="font-extralight">Adventure</p>
      </div>
      <div>
        <p className="font-bold">Categories</p>
        <p className="font-extralight">Newest</p>
        <p className="font-extralight">Popular</p>
        <p className="font-extralight">Most Rated</p>
      </div>
      <div className="flex flex-row space-x-8 pr-32 items-center">
        <div className="p-2 bg-white w-72 rounded-2xl flex flex-row space-x-2 items-center">
          <FaSearch className="text-red-900 ml-2 " size={20} />
          <p className="text-gray-300 ">search for a movie</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
