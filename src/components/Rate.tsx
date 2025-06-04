import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { useAuth } from "../contexts/UserContext";
import { onMovieRatting } from "../utils";
const Rate = ({
  onClose,
  movie_id,
  callBack,
}: {
  onClose: () => void;
  movie_id: number;
  callBack: () => void;
}) => {
  const { token } = useAuth();
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="relative flex flex-col bg-[#1D1616] px-10 py-8 rounded-3xl w-[90%] max-w-md text-white">
        <IoCloseCircleSharp
          size={40}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />

        <div className="flex flex-col items-center">
          <TiStarFullOutline className="text-amber-400 m-2" size={100} />
          <p className="text-xl font-extralight">Rate This Movie</p>
          <p className="text-3xl font-bold my-4">Title</p>

          <div className="flex flex-row items-center space-x-1">
            {[...Array(10)].map((_, index) => {
              const starValue = index + 1;

              return (
                <span
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(null)}>
                  {starValue <= (hover ?? rating) ? (
                    <TiStarFullOutline className="text-amber-400" size={30} />
                  ) : (
                    <TiStarOutline className="text-amber-400" size={30} />
                  )}
                </span>
              );
            })}
          </div>
          <p className="mt-4 text-lg">You rated: {rating} / 10</p>
          <button
            onClick={async () =>
              await onMovieRatting({
                token: token ?? "",
                param: {
                  movie_id: movie_id,
                  rating: rating,
                },
                callBack: function () {
                  onClose();
                  callBack();
                },
              })
            }
            className="p-2 px-4 bg-red-900 rounded-2xl mt-2 cursor-pointer">
            Rate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rate;
