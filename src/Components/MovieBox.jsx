import "./Styles/MovieBox.scss"

function MovieBox({movie}) {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className="single-movie">
        <img className="movie-cover" src={`${POSTER_PATH}${movie.poster_path}`} alt="Movie Poster" />
        <p>{movie.title}</p>
    </div>
  )
}

export default MovieBox