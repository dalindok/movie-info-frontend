import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { TrailerI } from "../../interface/TrailerInterface";
import { MovieDetailInterface } from "../../interface/MovieDetailInterface";
import YouTube from "react-youtube";

interface props {
  data: MovieDetailInterface;
  trailer: TrailerI[];
}

export const MovieDetail: React.FC<props> = ({ data, trailer }) => {
  return (
    <div>
      {/* {data.map((movie) => ( */}
      <div className=" flex flex-col px-16 gap-8 ">
        <div className=" flex flex-row my-6 justify-center gap-32 ">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt="Article Image"
            className="rounded-xl sm:h[100px] w-[120px] sm:w-[400px]  md:w[150px] object-cover "
          />
          <div className="w-[700px] flex flex-col ">
            <p className="text-4xl font-bold">{data.title}</p>
            <div className="flex flex-row gap-14">
              <div className="text-lg my-10">
                <p className="font-semibold">Rate</p>
                <div className="flex flex-row gap-2 items-center">
                  <TiStarFullOutline className="text-amber-400" size={26} />
                  <p>{data.vote_average}</p>
                </div>
              </div>
              <div className="text-lg my-10 ">
                <p className="font-semibold">Your Rate</p>
                <div className="flex flex-row gap-2 items-center">
                  <FaRegStar className="" size={24} />
                </div>
              </div>
              <div className="text-lg my-10  flex flex-row space-x-2 items-center px-6 text-white bg-red-900 rounded-2xl ">
                <IoIosAddCircleOutline />
                <p>Watchlist</p>
              </div>
            </div>
            <div className="flex flex-col  space-y-4 mt-2 text-lg">
              <div className="flex flex-row gap-4">
                <p className="font-semibold">Overview:</p>
                <p className="font-light"> {data.overview}</p>
              </div>

              <div className="w-[700px] flex flex-row gap-4">
                <p className="font-semibold">Released:</p>
                <p className="font-light">{data.release_date}</p>
              </div>
              <div className="w-[700px] flex flex-row gap-4">
                <p className="font-semibold">Genres: </p>
                <p className="font-light">
                  {data.genres.map((g) => g.name).join(", ")}
                </p>
              </div>
              <div className="w-[700px] flex flex-row gap-4">
                <p className="font-semibold">Adult: </p>
                <p className="font-light">{data.adult ? "Yes" : "No"}</p>
              </div>
              <div className="w-[700px] flex flex-row gap-4">
                {/* <p className="font-semibold">Director: </p>
                <p>
                  {credit.crewI
                    .filter((crew) => crew.job === "Director")
                    .map((crew) => crew.name)
                    .join(", ")}
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {trailer.length > 0 && (
          <div className="w-[700px] flex flex-col ">
            <p className="text-3xl font-bold">Trailer</p>
            <YouTube videoId={trailer[0].key} />
          </div>
        )}
      </div>
    </div>
  );
};
