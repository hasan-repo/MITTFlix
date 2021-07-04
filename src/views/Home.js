import React, { useEffect } from 'react'

import GenreItem from "../components/GenreItem"
import * as MovieAPI from '../MovieAPI'

function Home(props){

    // api context
    
    useEffect(() => {
        async function fetchAllMovies() {
            const movies = await MovieAPI.getAll()
            return movies
        }

        async function fetchGenres() {
           const all_movies = await fetchAllMovies()
           let genre = await MovieAPI.genres()
        }
        
        fetchGenres()
        
    }, [])

    return(
        <>
        <GenreItem />
    </>
    )
}

export default Home 