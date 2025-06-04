import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { MovieDetail } from "../components/Detail/MovieDetail";
import { TrailerI } from "../interface/TrailerInterface";
import { MovieInterface } from "../interface/MovieInterface";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CreaditI } from "../interface/CreditInterface";
import config from "../config";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [trailer, setTrailer] = useState<TrailerI[]>([]);
  const [credit, setCredit] = useState<CreaditI[]>([]);

  useEffect(() => {
    getMovies();
    // getCredit();
    // getTrailer();
  }, [id]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const getMovies = async () => {
    try {
      fetch(`${config.baseURL}/api/user/movies/${id}`)
        .then((res) => res.json())
        .then(function (json) {
          setMovie(json.data);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const getTrailer = async () => {
  //   try {
  //     await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=a67e0a07c70242426a9d195d7e13881e`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setTrailer(json.results));
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const getCredit = async () => {
  //   try {
  //     await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a67e0a07c70242426a9d195d7e13881e`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setCredit(json.results));
  //     console.log("credit : ", credit);
  //     // setDirector(
  //     //   json.crew.filter(() => crew.job === "Director").map(() => .name)
  //     // );
  //     // setWriters(
  //     //   data.crew
  //     //     .filter(() =>
  //     //       ["Writer", "Screenplay", "Story"].includes(.job)
  //     //     )
  //     //     .map(() => .name)
  //     // );
  //     // setCast(data.cast.slice(0, 5).map(() => .name)); // Top 5 actors
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-black text-white">
      <Nav />
      <button onClick={handleGoBack} className="pt-8 pl-12">
        <IoMdArrowRoundBack className="" size={30} />
      </button>
      {movie && <MovieDetail data={movie} />}
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
