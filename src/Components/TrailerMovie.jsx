import "../Assets/Styles/TrailerMovie.scss"

function TrailerMovie({selectMovie}) {
  console.log(selectMovie);
  //For trailer
  const trailer = selectMovie.videos.results.find(video => video.name === "Official Trailer")

  //For genre/s of the movie
  const key = selectMovie.genres.map( genre => (
    <p className="movie-genre">{genre.name}</p>
  ))

  return (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="top-modal">X</div>
            <div className="body-modal">
              <div className="main-trailer">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="movie-details">
                <h3>{selectMovie.original_title}</h3>
                <small>"{selectMovie.tagline}"</small>
              </div>
              <span className="movie-runtime">{selectMovie.runtime}mins</span>
              <div className="genre-container">{key}</div>
            </div>
        </div>
    </div>
  )
}

export default TrailerMovie