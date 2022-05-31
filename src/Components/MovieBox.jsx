import "../Assets/Styles/MovieBox.scss"
import NoPoster from "../Assets/Images/no-poster.png"
import { Link } from "react-router-dom"

function MovieBox({ movie, pickMovie, scroll }) {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500'
  //console.log(movie.id);

  //two function at same time
  const movieAndScroll = () => {
    pickMovie(movie);
    scroll();
  }

  return (
    <div className="single-movie" onClick={() => movieAndScroll(movie)}>
      <Link to={`/${movie.id}`}>
        <div className="cover-container">
          {movie.poster_path ? <img className="movie-cover" src={`${POSTER_PATH}${movie.poster_path}`} alt="Movie Poster" /> : <img className="movie-cover" src={NoPoster} alt="Movie Poster" />}
        </div>
        <div className="movie-info">
          <p>{movie.title}</p> 
          <h5>{movie.vote_average}</h5>
        </div>
      </Link>
    </div>
  )
}

export default MovieBox