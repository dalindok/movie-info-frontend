import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
// import { TrailerI } from "../../interface/TrailerInterface";
import { MovieInterface } from "../../interface/MovieInterface";
// import YouTube from "react-youtube";

interface props {
  data: MovieInterface;
}

export const MovieDetail: React.FC<props> = ({ data }) => {
  // function getYouTubeVideoId(trailer: string) {
  //   throw new Error("Function not implemented.");
  // }

  console.log("data.trailer : ", data.trailer);
  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/
    );
    return match ? match[1] : null;
  };

  return (
    <div>
      {/* {data.map((movie) => ( */}
      <div className=" flex flex-col px-16 gap-8 ">
        <div className=" flex flex-row my-6 justify-center gap-32 ">
          <img
            src={data.poster}
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
                  <p>{data.average_rating}</p>
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
                <p className="font-light"> {data.description}</p>
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
                <p className="font-semibold">Main Actors: </p>
                <p className="font-light">
                  {data.actors.map((actor) => actor.name).join(", ")} ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <p className="text-2xl font-semibold text-center items-start flex mb-4">
            Trailer
          </p>

          {data?.trailer && getYouTubeVideoId(data.trailer) ? (
            <iframe
              className="rounded-lg"
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                data.trailer
              )}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Trailer"
            ></iframe>
          ) : (
            <p className="text-red-500">Invalid YouTube URL</p>
          )}
        </div>
      </div>
    </div>
  );
};
