import React, { useState, useEffect } from 'react'

import GenreItem from "../components/GenreItem"
import * as MovieAPI from '../MovieAPI'


function Home(props) {

    const [ moviesData, setMoviesData ] = useState([])
    
    useEffect(() => {
        async function fetchAllMovies() {
            const movies = await MovieAPI.getAll()
            return movies
        }

        async function fetchGenres() {
            const all_movies = await fetchAllMovies()
            let genre = await MovieAPI.genres()
            for(let i = 0; i < genre.length; i ++) {
                genre[i]['movies'] = all_movies.filter(item => item.genre_ids.includes(genre[i]['id']) === true)
            }
            console.log(genre)
            setMoviesData(genre)
        }
        
        fetchGenres()
        
    }, [])

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
