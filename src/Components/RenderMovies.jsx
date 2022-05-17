import MovieBox from './MovieBox'
import "./Styles/RenderMovies.scss"

function RenderMovies({movies}) {
  return (
    <div className='movies-container max-content'>
        {movies.map( movie => <MovieBox key={movie.id}  movie={movie}/> )}
    </div>
  )
}

export default RenderMovies