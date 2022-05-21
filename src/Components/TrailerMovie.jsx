import "../Assets/Styles/TrailerMovie.scss"

function TrailerMovie() {

  return (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="top-modal">X</div>
            <div className="body-modal">
                This is for movie trailers.
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XH5OW46yO8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default TrailerMovie