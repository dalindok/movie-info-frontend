import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ActionMovie from "../components/genre/Action";
import Header from "../components/home/Header";
// import Item from "../components/category/MostRate";
import Nav from "../components/Nav";
import { MovieDetailInterface } from "../interface/MovieDetailInterface";

const Action = () => {
  const [movies, setMovies] = useState<MovieDetailInterface[]>([]);

  const getMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=a67e0a07c70242426a9d195d7e13881e&with_genres=28"
      );
      const json = await res.json();
      setMovies(json.results || []); // Ensure movies is always an array
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg-black text-white">
      <Nav />
      <Header />
      <p className=" pl-10 text-3xl font-semibold">Action</p>
      <ActionMovie data={movies} />
      <Footer />
    </div>
  );
};

export default Action;
