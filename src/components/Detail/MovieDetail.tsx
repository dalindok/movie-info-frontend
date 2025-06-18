import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import {
  IoIosAddCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { MovieInterface } from "../../interface/MovieInterface";
import { useAuth } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Rate from "../Rate";
import { onAddMovieToWatchList, onRemoveMovieFromWatchList } from "../../utils";

interface props {
  data: MovieInterface;
  onReload: () => void;
}

export const MovieDetail: React.FC<props> = ({ data, onReload }) => {
  const { userData, token } = useAuth();
  const navigate = useNavigate();
  const [showRate, setShowRate] = useState(false);

  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="px-4 md:px-16 py-10">
      {/* Movie Info Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Poster */}
        <img
          src={data.poster}
          alt="Movie Poster"
          className="w-full max-w-[300px] rounded-xl object-cover"
        />

        {/* Details */}
        <div className="flex flex-col w-full max-w-4xl text-white">
          {/* Title */}
          <p className="text-3xl md:text-4xl font-bold mb-4">{data.title}</p>

          {/* Rating, User Rating, Watchlist */}
          <div className="flex flex-wrap gap-6 mb-6">
            {/* Average Rating */}
            <div className="text-lg">
              <p className="font-semibold mb-2">Rate</p>
              <div className="flex items-center gap-2">
                <TiStarFullOutline className="text-amber-400" size={26} />
                <p>{data.average_rating}</p>
              </div>
            </div>

            {/* User Rating */}
            <div
              onClick={() =>
                userData
                  ? data.user_rate !== 0
                    ? null
                    : setShowRate(true)
                  : navigate("/account")
              }
              className="text-lg cursor-pointer"
            >
              <p className="font-semibold mb-2">
                {data.user_rate === 0 ? "Rate this" : "Your Rate"}
              </p>
              <div className="flex items-center gap-2">
                {data.user_rate !== 0 && <p>{data.user_rate}</p>}
                <FaRegStar size={24} />
              </div>
            </div>

            {/* Watchlist Button */}
            <div
              onClick={async () =>
                userData
                  ? data.is_watchlisted
                    ? await onRemoveMovieFromWatchList({
                        movie_id: data.id,
                        callBack: onReload,
                        token: token ?? "",
                      })
                    : await onAddMovieToWatchList({
                        movie_id: data.id,
                        callBack: onReload,
                        token: token ?? "",
                      })
                  : navigate("/account")
              }
              className="flex items-center gap-2 px-4 py-2 bg-red-900 rounded-2xl cursor-pointer"
            >
              {data.is_watchlisted ? (
                <IoIosCheckmarkCircleOutline />
              ) : (
                <IoIosAddCircleOutline />
              )}
              <p>
                {data.is_watchlisted ? "Remove Watchlist" : "Add Watchlist"}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 text-lg">
            <div className="flex flex-col md:flex-row md:gap-4">
              <p className="font-semibold">Overview:</p>
              <p className="font-light">{data.description}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <p className="font-semibold">Released:</p>
              <p className="font-light">{data.release_date}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <p className="font-semibold">Genres:</p>
              <p className="font-light">
                {data.genres.map((g) => g.name).join(", ")}
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <p className="font-semibold">Main Actors:</p>
              <p className="font-light">
                {data.actors.map((actor) => actor.name).join(", ")} ...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Section */}
      <div className="mt-12">
        <p className="text-2xl font-semibold text-center mb-6">Trailer</p>
        {data?.trailer && getYouTubeVideoId(data.trailer) ? (
          <iframe
            className="w-full h-[300px] md:h-[500px] rounded-lg"
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(
              data.trailer
            )}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Trailer"
          ></iframe>
        ) : (
          <p className="text-red-500 text-center">Invalid YouTube URL</p>
        )}
      </div>

      {/* Rate Modal */}
      {showRate && (
        <Rate
          movie_id={data.id}
          onClose={() => setShowRate(false)}
          callBack={onReload}
        />
      )}
    </div>
  );
};
