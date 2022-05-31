import "../Assets/Styles/TrailerMovie.scss"
import {useHistory} from "react-router-dom"

function TrailerMovie({selectMovie}) {
  const navigate = useHistory()

  //Back or close button
  const backBtn = () => {
    navigate.push("/")
    console.log("Trailer closed");
  }
  //For trailer
  const trailer = selectMovie.videos.results.find(video => video.name === "Official Trailer")
  const trailerKey = trailer ? trailer.key : selectMovie.videos.results[0].key

  //For genre/s of the movie
  const key = selectMovie.genres.map( genre => (
    <p className="movie-genre">{genre.name}</p>
  ))

  return (
    <div className="youtube">
      <div className="modal">
        <div className="modal-wrapper">
          <div className="main-trailer">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="body-modal">
          <div className="movie-details">
            <h3>{selectMovie.original_title}</h3>
            <small>"{selectMovie.tagline}"</small>
          </div>
          <div className="genre-container">{key}</div>
          <span className="movie-runtime">{selectMovie.runtime}mins</span>
          <button className="back-button" onClick={backBtn}>Close Trailer</button>
        </div>
      </div>
    </div>
  )
}

export default TrailerMovie