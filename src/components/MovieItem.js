import React, { useState, useContext } from 'react'

import { AppContext } from "../App"

import * as MovieAPI from '../MovieAPI'

function MovieItem(props) {

    const { movieItem } = props

    

    const { handleToggle } = useContext(AppContext)
    const handleToggleBtn = () => {
        
        handleToggle(movieItem)
    }

    return (
        <div className="movie">
            <img
                src={ movieItem.poster_path } 
            />
            <div className="overlay">
                <div className="title">{ movieItem.title }</div>
                <div className="rating">{movieItem.vote_average}/10</div>
                <div className="plot">
                    { movieItem.overview }
                </div>
                <div data-toggled={ movieItem.my_list } className="listToggle" onClick={ () => handleToggleBtn() }>
                    <div>
                        <i className="fa fa-fw fa-plus"></i
                        ><i className="fa fa-fw fa-check"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieItem