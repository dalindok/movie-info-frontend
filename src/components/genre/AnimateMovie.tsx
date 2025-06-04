import { MovieInterface } from "../../interface/MovieInterface";
import MovieItem from "../MovieItem";

interface props {
  data: MovieInterface[];
}

const AnimateMovie: React.FC<props> = ({ data }) => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-5 gap-4 m-6 mx-12">
      {data.map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </div>
  );
};

export default AnimateMovie;
