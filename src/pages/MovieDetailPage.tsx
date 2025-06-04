import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { MovieDetail } from "../components/Detail/MovieDetail";
import { MovieInterface } from "../interface/MovieInterface";
import { IoMdArrowRoundBack } from "react-icons/io";
import config from "../config";
import { useAuth } from "../contexts/UserContext";

const MovieDetailPage = () => {
  const { userData } = useAuth();
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const getMovies = async () => {
    try {
      const url = userData
        ? `${config.baseURL}/api/user/movies/${id}?user_id=${userData.id}`
        : `${config.baseURL}/api/user/movies/${id}`;
      fetch(url)
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-black text-white">
      <Nav />
      <button onClick={handleGoBack} className="pt-8 pl-12">
        <IoMdArrowRoundBack className="" size={30} />
      </button>
      {movie && <MovieDetail data={movie} onReload={() => getMovies()} />}
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
