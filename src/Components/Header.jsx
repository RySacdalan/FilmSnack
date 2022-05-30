import '../Assets/Styles/Header.scss'

function Header({setSearch, searchMovies}) {
  return (
    <div className="header max-content">
        <div className="header-content">
          <div className="header-title">
            <ion-icon name="videocam"></ion-icon>
            <h1>FilmSnack</h1>
          </div>
          <form onSubmit={searchMovies}>
            <input className="input-form" type="text" placeholder="e.g. Spiderman" onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">Search</button>
          </form>
        </div>
    </div>
  )
}

export default Header