import "../Assets/Styles/HeroSection.scss"

function HeroSection({selectMovie}) {
  const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="hero" style={{backgroundImage: `url(${BACKDROP_PATH}${selectMovie.backdrop_path ? selectMovie.backdrop_path : null} )`}}>
        <div className="hero-wrapper max-content">
          <div className="hero-details">  
            <h1 className="movie-title">{selectMovie.title}</h1>
            <button className="trailer-btn">Watch Trailer</button>
            <div className="vote-trailer">
              <span className="movie-vote">Vote Average: {selectMovie.vote_average}</span>
              <span className="movie-popularity">Popularity: {selectMovie.popularity}</span>
            </div>
            <p className="movie-overview">{selectMovie.overview}</p>
          </div>
        </div>
    </div>
  )
}

export default HeroSection