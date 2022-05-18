import "./Styles/MovieBox.scss"

function MovieBox({movie}) {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className="single-movie">
      <div className="cover-container">
        <img className="movie-cover" src={`${POSTER_PATH}${movie.poster_path}`} alt="Movie Poster" />
      </div>  
      <div className="movie-info">
        <p>{movie.title}</p>
        <h5>{movie.vote_average}</h5>
      </div>
    </div>
  )
}

export default MovieBox