import '../styles/Header.scss'

const Header = () => {
    return (
        <>
            <header>
                <nav className="nav-bar">
                        <a className="nav-bar__a" href="inicio">inicio</a>
                        <a className="nav-bar__a" href="inicio">videos mas populares</a>
                        <form className="nav-bar__form" action="">
                            <input type="search" placeholder="search" />
                            <button type="submit">search</button>
                        </form>
                </nav>
            </header>
        </>
    )
}

export default Header;