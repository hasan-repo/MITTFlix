import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Header(props) {

    const [searchKey, setSearchKey] = useState("")
    

    const handleSubmit = e => {
        e.preventDefault()
        if (window.location.href.includes('my-list')) {
            props.history.push(`/search/my-list/${ searchKey }`)
        }
        else {
            props.history.push(`/search/home/${ searchKey }`)
        }        
    }




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


export default withRouter(Header)
