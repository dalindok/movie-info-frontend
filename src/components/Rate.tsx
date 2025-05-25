import { IoCloseCircleSharp } from "react-icons/io5";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
const Rate = () => {
  return (
    <div className="flex flex-col  mx-50 my-16 py-10 bg-[#1D1616] rounded-4xl">
      <IoCloseCircleSharp size={50} className="ml-12" />
      <div className="flex flex-col items-center space-x-1">
        <TiStarFullOutline className="text-amber-400 m-2" size={150} />
        <p className="text-2xl font-extralight">Rate This Movie</p>
        <p className="text-4xl font-bold my-4">Title</p>
        <div className="flex flex-row items-center space-x-1">
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
          <TiStarOutline className="text-amber-400" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Rate;
