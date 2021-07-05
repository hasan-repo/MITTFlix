import React, { useState, useEffect, useContext } from 'react'

import GenreItem from "../components/GenreItem"
import { AppContext } from "../App"


function Home() {

    const { moviesData } = useContext(AppContext)
    
    // useEffect(() => {
    //     async function fetchAllMovies() {
    //         const movies = await MovieAPI.getAll()
    //         return movies
    //     }

    //     async function fetchGenres() {
    //         const all_movies = await fetchAllMovies()
    //         let genre = await MovieAPI.genres()
    //         for(let i = 0; i < genre.length; i ++) {
    //             genre[i]['movies'] = all_movies.filter(item => item.genre_ids.includes(genre[i]['id']) === true)
    //         }
    //         console.log(genre)
    //         setMoviesData(genre)
    //     }
        
    //     fetchGenres()
        
    // }, [])

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
