import config from "../config";
import { RequestRattingMovieParam } from "../interface/RequestRattingMovie";

export const onMovieRatting = async ({
  param,
  callBack,
  token,
}: {
  param: RequestRattingMovieParam;
  callBack: () => void;
  token: string;
}) => {
  try {
    const response = await fetch(`${config.baseURL}/api/user/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        movie_id: param.movie_id,
        rating: param.rating,
      }),
    });

    const res = await response.json();

    if (response.ok) {
      callBack();
      alert(res.message);
    } else {
      alert("Ratting Fail!");
    }
  } catch (error) {
    alert("Ratting Fail!");
  }
};
export const onAddMovieToWatchList = async ({
  movie_id,
  callBack,
  token,
}: {
  movie_id: number;
  callBack: () => void;
  token: string;
}) => {
  try {
    const response = await fetch(`${config.baseURL}/api/user/watchlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        movie_id: movie_id,
      }),
    });

    const res = await response.json();

    if (response.ok) {
      callBack();
      alert(res.message);
    } else {
      alert("Add to watch list fail!");
    }
  } catch (error) {
    alert("Add to watch list fail!");
  }
};
export const onRemoveMovieFromWatchList = async ({
  movie_id,
  callBack,
  token,
}: {
  movie_id: number;
  callBack: () => void;
  token: string;
}) => {
  try {
    const response = await fetch(
      `${config.baseURL}/api/user/watchlist/${movie_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const res = await response.json();

    if (response.ok) {
      callBack();
      alert(res.message);
    } else {
      alert("Remove from watch list fail!");
    }
  } catch (error) {
    alert("Remove from watch list fail!");
  }
};
