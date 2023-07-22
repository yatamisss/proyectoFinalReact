import '../styles/Header.scss'

const Header = () => {
    return (
        <>
            <header>
                <nav className="nab-bar">
                    <div className="nab-bar__container">
                        <a href="inicio">inicio</a>
                        <a href="inicio">novedades</a>
                        <form action="">
                            <input type="search" placeholder="search" />
                            <button type="submit">search</button>
                        </form>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;