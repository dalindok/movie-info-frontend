import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/home/Header";
import Nav from "../components/Nav";
import { MovieInterface } from "../interface/MovieInterface";
import config from "../config";
import UpComingMovie from "../components/category/UpComingMovie";

const Upcoming = () => {
  const [upComing, setUpComing] = useState<MovieInterface[]>([]);

  const getUpComing = async () => {
    fetch(`${config.baseURL}/api/user/movies?upcoming=1`)
      .then((res) => res.json())
      .then(function (json) {
        setUpComing(json.data);
      });
  };

  useEffect(() => {
    getUpComing();
  }, []);

  return (
    <div className="bg-black text-white">
      <Nav />
      <Header />
      <p className=" pl-10 text-3xl font-semibold">Upcoming Movie</p>
      <UpComingMovie data={upComing} />
      <Footer />
    </div>
  );
};

export default Upcoming;
