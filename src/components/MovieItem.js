import React from 'react';



function MovieItem(props){

    const {movieItem} = props

    return(
        <div className = "movie">
            <img
                src = { movieItem.poster_path }
            />

            <div className="overlay">
                <div className="title">{ movieItem.title }</div>
                <div className="rating">7.1/10</div>
                <div className="plot">{ movieItem.overview }</div>
                <div data-toggled = { movieItem.my_list } className="listToggle">
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