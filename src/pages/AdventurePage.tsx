import Footer from "../components/Footer";
import Header from "../components/home/Header";
import Nav from "../components/Nav";
import ActionMovie from "../components/genre/Action";
import { useState, useEffect } from "react";
import { MovieDetailInterface } from "../interface/MovieDetailInterface";

const Action = () => {
  const [movies, setMovies] = useState<MovieDetailInterface[]>([]);
  const getMovies = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=a67e0a07c70242426a9d195d7e13881e&with_genres=12"
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="bg-black text-white">
      <Nav />
      <Header />
      <p className=" pl-10 text-3xl font-semibold">Adventure</p>
      <ActionMovie data={movies} />
      <Footer />
    </div>
  );
};

export default Action;
