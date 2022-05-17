import "./Styles/Header.scss"

function Header({setSearch, searchMovies}) {
  return (
    <div className="header max-content">
        <div className="header-content">
            <h1>FilmSnack</h1>
            <form onSubmit={searchMovies}>
                <input type="text" placeholder="e.g. Spiderman" onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}

export default Header