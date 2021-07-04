import React from 'react';

function MovieItem(props){

    return(
        <div className = "movie">
            <img
                src="https://image.tmdb.org/t/p/w500/fddtVEUozxvLmehR5yGZjem44pD.jpg"
            />

            <div className="overlay">
                <div className="title">Ant-Man</div>
                <div className="rating">7.1/10</div>
                <div className="plot">
                Armed with the astonishing ability to shrink in scale but
                increase in strength, master thief Scott Lang must embrace his
                inner-hero and help his mentor, Doctor Hank Pym, protect the
                secret behind his spectacular Ant-Man suit from a new
                generation of towering threats. Against seemingly
                insurmountable obstacles, Pym and Lang must plan and pull off
                a heist that will save the world.
                </div>
                <div data-toggled="true" className="listToggle">
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