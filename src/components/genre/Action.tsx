import { IoIosAddCircleOutline } from "react-icons/io";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

import { MovieInterface } from "../../interface/MovieInterface";

interface props {
  data: MovieInterface[];
}
const ActionMovie: React.FC<props> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 m-6 mx-12">
      {data.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col p-6 rounded-lg text-center items-center"
        >
          <Link to={`/movie/${movie.id}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-xl h-[300px] w-[120px] sm:w-[200px] md:w-[150px] object-cover"
            />
          </Link>
          <div className="flex flex-row items-center space-x-4 mt-2">
            <div className="flex flex-row items-center space-x-1">
              <TiStarFullOutline className="text-amber-400" size={20} />
              <p>{movie.average_rating}</p>
            </div>
            <TiStarOutline className="text-red-900" size={20} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Link to={`/movie/${movie.id}`}>
              <p className="text-xl font-semibold w-46 pt-1">{movie.title}</p>
            </Link>
            <p>{movie.release_date}</p>
          </div>
          <div className="flex flex-row space-x-2 items-center p-2 bg-red-900 rounded-2xl mt-2">
            <IoIosAddCircleOutline />
            <p>Watchlist</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActionMovie;
