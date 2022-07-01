import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./movieDetail.css";
const img_base_url = "https://image.tmdb.org/t/p/w220_and_h330_face";

export default function MovieDetail() {
  const history = useHistory();
  const { search } = history.location;
  const [detail, setDetail] = useState({});
  const getIdFromParam = () => {
    return parseInt(search.slice(1, search.length).split("=")[1]);
  };
  useEffect(() => {
    if (search) {
      const id = getIdFromParam();
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=61beac6430ea7906d08c6db652d25f36&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setDetail(data));
    }
  }, [search]);

  return (
    <div className="detail-container w-100 p-3">
      <div className="detail-header d-flex">
        <img
          className="movie-img"
          alt="movie-img"
          src={`${img_base_url}${detail.poster_path}`}
        />
        <div className="details">
          <span className="title text-uppercase"> {detail.title}</span>
          <div className="d-flex">
            {detail?.genres?.map((item) => (
              <div className="generes-tags me-2 p-1">{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
