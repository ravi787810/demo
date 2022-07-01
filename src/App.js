import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviewList from "./MovieList";
import MovieDetail from "./MovieDetail/MovieDetail";
/* 
https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_APIKEY}&language=en-US
/movieDetail?id=MOVIE_ID

61beac6430ea7906d08c6db652d25f36
*/
function App() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const getData = () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=61beac6430ea7906d08c6db652d25f36&language=en-US&query=a&page=1&include_adult=false"
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setMovies(results);
        dispatch({ type: "GET_LIST", payload: results });
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MoviewList movies={movies} />
          </Route>
          <Route path="/movieDetail">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
      <div className="d-flex justify-content-evenly row"></div>
    </div>
  );
}

export default App;
