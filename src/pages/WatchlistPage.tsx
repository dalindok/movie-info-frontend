import Footer from "../components/Footer";
import MovieItem from "../components/MovieItem";
import Nav from "../components/Nav";
import config from "../config";
import { useAuth } from "../contexts/UserContext";
import { IWatchList } from "../interface/WatchListInterface";
import { useEffect, useState } from "react";

const WatchlistPage = () => {
  const { token } = useAuth();
  const [watchListData, setWatchListData] = useState<IWatchList[]>([]);

  useEffect(() => {
    getWatchLists();
  }, []);

  const getWatchLists = () => {
    fetch(`${config.baseURL}/api/user/watchlist`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(function (json) {
        setWatchListData(json.data);
      });
  };

  return (
    <div className="bg-black text-white h-screen">
      <Nav />
      <div className="m-12">
        <p className="text-4xl font-bold">My Watchlist</p>
        {watchListData.length > 0 ? (
          <div className=" grid grid-cols-2 sm:grid-cols-5 gap-4 m-6 mx-12">
            {watchListData.map((movie) => (
              <MovieItem movie={movie.movie} />
            ))}
          </div>
        ) : (
          <p>No Watchlist</p>
        )}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default WatchlistPage;
