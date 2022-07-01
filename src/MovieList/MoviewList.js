import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./movieList.css";
const img_base_url = "https://image.tmdb.org/t/p/w220_and_h330_face";

export default function MoviewList({ movies }) {
  const history = useHistory();
  const state = useSelector((state) => state);

  const getMovieDetail = useCallback(
    (id) => {
      history.push({
        pathname: "/movieDetail",
        search: `?id=${id}`,
      });
    },
    [history]
  );
  return (
    <div className="row justify-content-evenly">
      {movies?.length > 0 &&
        movies.map(({ title, poster_path, id }, i) => (
          <div
            onClick={() => getMovieDetail(id)}
            className="mx-2 card col col-lg-3 p-2 my-2"
            key={i}
          >
            <span className="text-uppercase text-center">{title}</span>
            <img alt="movie-img" src={`${img_base_url}${poster_path}`} />
          </div>
        ))}
    </div>
  );
}
