import Header from "../components/home/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Subhead from "../components/home/Subhead";
import UpComingMovie from "../components/category/UpComingMovie";
import PopularMovie from "../components/category/PopularMovie";
import MostRate from "../components/category/MostRate";
import { useEffect, useState } from "react";
import { MovieDetailInterface } from "../interface/MovieDetailInterface";

const Home = () => {
  const [mostRate, setMostRate] = useState<MovieDetailInterface[]>([]);
  const [popular, setPopular] = useState<MovieDetailInterface[]>([]);
  const [upComing, setUpComing] = useState<MovieDetailInterface[]>([]);

  useEffect(() => {
    getMostRates();
    getsPopular();
    getUpComing();
  }, []);

  const getMostRates = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a67e0a07c70242426a9d195d7e13881e"
    )
      .then((res) => res.json())
      .then((json) => setMostRate(json.results));
  };
  const getsPopular = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a67e0a07c70242426a9d195d7e13881e"
    )
      .then((res) => res.json())
      .then((json) => setPopular(json.results));
  };

  const getUpComing = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=a67e0a07c70242426a9d195d7e13881e"
    )
      .then((res) => res.json())
      .then((json) => setUpComing(json.results));
  };

  return (
    <div className="bg-black text-white">
      <Nav />
      <Header />
      <Subhead />
      <p className=" pl-10 text-3xl font-semibold">Up Comming</p>
      <UpComingMovie data={upComing} />
      <p className="pl-10 text-3xl font-semibold">Popular</p>
      <PopularMovie data={popular} />
      <p className="pl-10 text-3xl font-semibold">Most Rated</p>
      <MostRate data={mostRate} />
      <Footer />
    </div>
  );
};

export default Home;
