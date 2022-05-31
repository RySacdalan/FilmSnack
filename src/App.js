import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./App.scss";
import ClipLoader from "react-spinners/ClipLoader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RenderMovies from "./Components/RenderMovies";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import TrailerMovie from "./Components/TrailerMovie";
import NotFound from "./Assets/Images/not-found.png";

function App() {
  const API_KEY = "95c0f8b244214a068a04d1af70286a1d";
  const API_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectMovie, setSelectMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch movies
  const fetchMovies = async (search) => {
    const filterMovie = search ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${filterMovie}/movie`, {
      params: {
        api_key: API_KEY,
        query: search,
      },
    });
    setLoading(false);
    setMovies(results);
    pickMovie(results[0]);
  };

  //Get trailer of movie
  const fetchTrailer = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });
    setLoading(false);
    return data;
  };

  const pickMovie = async (movie) => {
    const data = await fetchTrailer(movie.id);
    setSelectMovie(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  //Filter movie search
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(search);
  };

  //scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="App">
        <Header searchMovies={searchMovies} setSearch={setSearch} />
        {movies.length ? (
          <Fragment>
            <div className="hero-wrapper">
              <HeroSection selectMovie={selectMovie} movies={movies} />
              <Switch>
                <Route path={`/${selectMovie.id}/:id`}>
                  <TrailerMovie selectMovie={selectMovie} />
                </Route>
              </Switch>
            </div>
            <div className="movie-wrapper">
              <RenderMovies
                movies={movies}
                pickMovie={pickMovie}
                scroll={scrollToTop}
              />
            </div>
          </Fragment>
        ) : (
          <div className="found-error max-content">
            {loading ? (
              <div className="filmsnack-loading">
                <ClipLoader size={200} color={"#fff"} loading={loading} />
              </div>
            ) : (
              <Fragment>
                <img src={NotFound} alt="No movies" />
                <h2>
                  Sorry, no movies found <ion-icon name="sad"></ion-icon>
                </h2>
                <p>Please try another one!</p>
              </Fragment>
            )}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
