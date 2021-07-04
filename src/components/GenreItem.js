import React from 'react'
import MovieItem from "./MovieItem"

function GenreItem(props) {
    const { genreItem } = props

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
                            <MovieItem movieItem={ movie } key={ index } /> 
                        ))
                    }
                </div> 
            </div>
        </div>
    )
}

export default GenreItem