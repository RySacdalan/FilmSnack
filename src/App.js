import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const API_KEY = "95c0f8b244214a068a04d1af70286a1d";
  const API_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);

  //Fetch movies
  const fetchMovies = async () => {
    const { data } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    setMovies(data);
    console.log(data);
  };
  console.log(movies);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Hello from FilmSnack</h1>
    </div>
  );
}

export default App;
