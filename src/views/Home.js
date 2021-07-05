import React, { useState, useEffect, useContext } from 'react'

import GenreItem from "../components/GenreItem"
import { AppContext } from "../App"


function Home() {

    const { moviesData } = useContext(AppContext)
    

    return (
        <>
            {
                moviesData.map((moviesCell, index) => (
                    <GenreItem genreItem={ moviesCell } key={ index } />
                ))
            }
        </>

    )
}

export default Home
