import MovieBox from './MovieBox'

function RenderMovies({movies}) {
  return (
    <div>
        {movies.map( movie => <MovieBox key={movie.id}  movie={movie}/> )}
    </div>
  )
}

export default RenderMovies