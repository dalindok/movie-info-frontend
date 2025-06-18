import React from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MovieInterface } from "../interface/MovieInterface";

const MovieItem: React.FC<{ movie: MovieInterface }> = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
    >
      {/* Movie Poster */}
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="rounded-xl w-[200px] sm:w-[200px] md:w-[250px] h-[300px] object-cover"
        />
      </Link>

      {/* Rating */}
      <div className="flex items-center space-x-4 mt-3">
        <div className="flex items-center space-x-1">
          <TiStarFullOutline className="text-amber-400" size={20} />
          <p className="text-sm">{movie.average_rating}</p>
        </div>
        <TiStarOutline className="text-red-900" size={20} />
      </div>

      {/* Title + Release Date */}
      <div className="flex flex-col items-center gap-1 mt-2">
        <Link to={`/movie/${movie.id}`}>
          <p className="text-lg font-semibold truncate max-w-[160px]">
            {movie.title}
          </p>
        </Link>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieItem;
