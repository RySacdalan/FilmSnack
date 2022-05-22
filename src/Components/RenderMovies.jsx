import MovieBox from './MovieBox'
import "../Assets/Styles/RenderMovies.scss"

function RenderMovies({movies, pickMovie}) {
  return (
    <div className='movies-container max-content'>
        {movies.map( movie => <MovieBox key={movie.id} movie={movie} pickMovie={pickMovie}/> )}
    </div>
  )
}

export default RenderMovies