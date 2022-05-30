import MovieBox from './MovieBox'
import "../Assets/Styles/RenderMovies.scss"

function RenderMovies({movies, pickMovie, scroll}) {
  return (
    <div className='movies-container max-content'>
        {movies.map( movie => <MovieBox key={movie.id} movie={movie} pickMovie={pickMovie} scroll={scroll}/>)}
    </div>
  )
}

export default RenderMovies