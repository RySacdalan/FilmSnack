import "./Styles/Header.scss"

function Header() {
  return (
    <div className="header max-content">
        <div className="header-content">
            <h1>FilmSnack</h1>
            <form>
                <input type="text" placeholder="e.g. Spiderman"/>
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}

export default Header