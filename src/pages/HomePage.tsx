import Header from "../components/home/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Subhead from "../components/home/Subhead";
import { useEffect, useState } from "react";
import { MovieInterface } from "../interface/MovieInterface";
import config from "../config";
import AllMovie from "../components/home/AllMovie";

const Home = () => {
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);

  useEffect(() => {
    getAllMovie();
  }, []);

  const getAllMovie = async () => {
    fetch(`${config.baseURL}/api/user/movies?per_page=100`)
      .then((res) => res.json())
      .then(function (json) {
        setAllMovies(json.data);
      });
  };

  return (
    <div className="bg-black text-white">
      <Nav />
      <Header />
      <Subhead />
      <p className=" pl-10 text-3xl font-semibold">All Movies</p>
      <AllMovie data={allMovies} />
      <Footer />
    </div>
  );
};

export default Home;
