import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import AnimateMovie from "../components/genre/AnimateMovie";
import Header from "../components/home/Header";
import Nav from "../components/Nav";
import config from "../config";
import { MovieInterface } from "../interface/MovieInterface";

const Animation = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const getMovies = async () => {
    fetch(`${config.baseURL}/api/user/movies?genre_id=2`)
      .then((res) => res.json())
      .then(function (json) {
        setMovies(json.data);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="bg-black text-white">
      <Nav />
      <Header />
      <p className=" pl-10 text-3xl font-semibold">Animation Movie</p>
      <AnimateMovie data={movies} />
      <Footer />
    </div>
  );
};

export default Animation;
