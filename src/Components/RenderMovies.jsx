import MovieBox from './MovieBox'
import "../Assets/Styles/RenderMovies.scss"

function RenderMovies({movies, setSelectMovie}) {
  return (
    <div className='movies-container max-content'>
        {movies.map( movie => <MovieBox key={movie.id} movie={movie} setSelectMovie={setSelectMovie}/> )}
    </div>
  )
}

export default RenderMovies