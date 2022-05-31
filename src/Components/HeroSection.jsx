import { Link } from "react-router-dom";
import "../Assets/Styles/HeroSection.scss"

function HeroSection({selectMovie}) {
  const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="hero" style={{backgroundImage: `url(${BACKDROP_PATH}${selectMovie.backdrop_path ? selectMovie.backdrop_path : null} )`}}>
        <div className="hero-wrapper max-content">
          <div className="hero-details">  
            <h1 className="movie-title">{selectMovie.title}</h1>
            <Link to={`/trailer/${selectMovie.imdb_id}`}>
              <button className="trailer-btn">
                <ion-icon name="play-circle-outline"></ion-icon>
                Watch Trailer
              </button>
            </Link>
            <div className="vote-trailer">
              <span className="movie-vote">{selectMovie.vote_average} vote average</span>
              <span className="movie-popularity">{selectMovie.popularity} popularity</span>
            </div>
            <p className="movie-overview">{selectMovie.overview}</p>
          </div>
        </div>
    </div>
  )
}

export default HeroSection