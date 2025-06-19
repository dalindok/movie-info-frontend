import Footer from "../components/Footer";
import Header from "../components/home/Header";
import Nav from "../components/Nav";
import ActionMovie from "../components/genre/Action";
import { useState, useEffect } from "react";
import { MovieInterface } from "../interface/MovieInterface";
import config from "../config";

const Action = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const getMovies = async () => {
    fetch(`${config.baseURL}/api/user/movies?genre_id=3`)
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
      <p className=" pl-10 text-3xl font-semibold">Adventure Movie</p>
      <ActionMovie data={movies} />
      <Footer />
    </div>
  );
};

export default Action;
