import "../Assets/Styles/HeroSection.scss"

function HeroSection({movies, selectMovie}) {
  const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original'
    console.log(movies);

  return (
    <div className="hero" style={{backgroundImage: `url(${BACKDROP_PATH}${selectMovie.backdrop_path ? selectMovie.backdrop_path : null} )`}}>
        <div className="hero-wrapper">
        </div>
    </div>
  )
}

export default HeroSection