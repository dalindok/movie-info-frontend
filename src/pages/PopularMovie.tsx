import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/home/Header";
import Nav from "../components/Nav";
import { MovieInterface } from "../interface/MovieInterface";
import config from "../config";
import PopularMovie from "../components/category/PopularMovie";

const Popular = () => {
  const [popular, setPopular] = useState<MovieInterface[]>([]);

  const getPopular = () => {
    fetch(`${config.baseURL}/api/user/movies?popular=1`)
      .then((res) => res.json())
      .then(function (json) {
        setPopular(json.data);
      });
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="bg-black text-white">
      <Nav />
      <Header />
      <p className=" pl-10 text-3xl font-semibold">Poplar Movie</p>
      <PopularMovie data={popular} />
      <Footer />
    </div>
  );
};

export default Popular;
