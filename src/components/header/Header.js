function Header () {
    return (<header className="header">
        <div className="header-container container">
            <nav>
                <ul className="header-nav">
                    <li className="nav-element"><a href="#tobuy" className="nav-link">To Buy</a></li>
                    <li className="nav-element"><a href="#bought" className="nav-link">Bought</a></li>
                    <li className="nav-element"><a href="#saleinprogress" className="nav-link">Sale in progress</a></li>
                    <li className="nav-element"><a href="#sold" className="nav-link">Sold</a></li>
                </ul>
            </nav>
            <a href="#" className="logo">Shoe Selector</a>
        </div>
    </header>);

}

export default Header;