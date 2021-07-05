import React, { useContext } from 'react'
import MovieItem from "./MovieItem"

import { AppContext } from "../App"

function GenreItem(props) {
   
    const { genreItem } = props
    const { handleToggle } = useContext(AppContext)

    //if movir count 0 retun empty tag
    if (genreItem.movies.length === 0) { 
        return (<></>)
    }

    return(
        <div className="titleList">
            <div className="title">
            <h1>{ genreItem.name }</h1>
                <div className="titles-wrapper">
                    {
                         genreItem.movies.map((movie, index) => (
                            <MovieItem movieItem={ movie } key={ index } handleToggle={ handleToggle } /> 
                        ))
                    }
                </div> 
            </div>
        </div>
    )
}

export default GenreItem