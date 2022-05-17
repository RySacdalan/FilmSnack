import axios from "axios";
import { useState, useEffect } from "react";
import "./App.scss";
import RenderMovies from "./Components/RenderMovies";
import Header from "./Components/Header";

function App() {
  const API_KEY = "95c0f8b244214a068a04d1af70286a1d";
  const API_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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
    setMovies(results);
    console.log(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  //Filter movie search
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(search);
  };

  return (
    <div className="App">
      <Header searchMovies={searchMovies} setSearch={setSearch} />
      <RenderMovies movies={movies} />
    </div>
  );
}

export default App;
