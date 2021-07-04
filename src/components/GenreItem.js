import React from 'react'
import MovieItem from "./MovieItem"

function GenreItem(props) {

    return(
        <div className="titleList">
            <div className="title">
            <h1>Action</h1>
                <div className="titles-wrapper">
                    <MovieItem />
                </div> 
            </div>
        </div>
    )
}

export default GenreItem