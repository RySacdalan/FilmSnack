import "../Assets/Styles/TrailerMovie.scss"

function TrailerMovie({selectMovie}) {
  //For trailer
  const trailer = selectMovie.videos.results.find(video => video.name === "Official Trailer")

  //For genre/s of the movie
  const key = selectMovie.genres.map( genre => (
    <p className="movie-genre">{genre.name}</p>
  ))

  return (
    <div className="youtube">
      <div className="modal">
        <div className="modal-wrapper">
          <div className="main-trailer">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="body-modal">
          <div className="movie-details">
            <h3>{selectMovie.original_title}</h3>
            <small>"{selectMovie.tagline}"</small>
          </div>
          <div className="genre-container">{key}</div>
          <span className="movie-runtime">{selectMovie.runtime}mins</span>
        </div>
      </div>
    </div>
  )
}

export default TrailerMovie