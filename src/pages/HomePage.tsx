import Header from "../components/home/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Subhead from "../components/home/Subhead";
import UpComingMovie from "../components/category/UpComingMovie";
import PopularMovie from "../components/category/PopularMovie";
import { useEffect, useState } from "react";
import { MovieInterface } from "../interface/MovieInterface";
import config from "../config";

const Home = () => {
  const [popular, setPopular] = useState<MovieInterface[]>([]);
  const [upComing, setUpComing] = useState<MovieInterface[]>([]);

  useEffect(() => {
    getUpComing();
    getsPopular();
  }, []);

  const getsPopular = () => {
    fetch(`${config.baseURL}/api/user/movies?popular=1`)
      .then((res) => res.json())
      .then(function (json) {
        setPopular(json.data);
      });
  };

  const getUpComing = async () => {
    fetch(`${config.baseURL}/api/user/movies?upcoming=1`)
      .then((res) => res.json())
      .then(function (json) {
        setUpComing(json.data);
      });
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
      <Footer />
    </div>
  );
};

export default Home;
