import axios from "axios";
import { useState, useEffect } from "react";
import "./App.scss";
import RenderMovies from "./Components/RenderMovies";
import Header from "./Components/Header";

function App() {
  const API_KEY = "95c0f8b244214a068a04d1af70286a1d";
  const API_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);

  //Fetch movies
  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    setMovies(results);
    console.log(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <RenderMovies movies={movies} />
    </div>
  );
}

export default App;
