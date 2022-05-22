import "../Assets/Styles/TrailerMovie.scss"

function TrailerMovie({selectMovie}) {
  const trailer = selectMovie.videos.results.find(video => video.name === "Official Trailer")

  return (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="top-modal">X</div>
            <div className="body-modal">
                This is for movie trailers.
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default TrailerMovie