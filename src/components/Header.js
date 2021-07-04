import React from 'react'

function Header(props) {

    return (
        <header className = "header">
        <a onClick={ (e) => { e.preventDefault(); props.history.push('/')}}>
            <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
            />
        </a>

        <div id="navigation" className="navigation">
            <nav>
            <ul>
                <li><a onClick={ (e) => { e.preventDefault(); props.history.push('/my-list')}}>My List</a></li>
            </ul>
            </nav>
        </div>

        <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." />
            <div className="searchResults"></div>
        </form>
        
    </header>

    )
}


export default Header
