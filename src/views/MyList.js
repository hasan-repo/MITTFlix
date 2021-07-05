import React, { useState, useEffect } from 'react'

import MovieItem from "../components/MovieItem"

// import { AppContext } from "../App"

import * as MovieAPI from '../MovieAPI'

function MyList () {
    
    const [ myListData, setMyListData ] = useState([])

    const handleToggle = async (itemData) => {
        if (!itemData.my_list) {
            await MovieAPI.addToList(itemData)
        }
        else {
            await MovieAPI.removeFromList(itemData)
        }
    }

    useEffect(() => {
        async function fetchMyListMovies() {
            const myList = await MovieAPI.getMyList()
            setMyListData(myList)
        }
        fetchMyListMovies()
    }, [handleToggle]) 
    
    return (
        <div className="titleList">
            <div className="title">
                <div className="titles-wrapper">
                    {
                        myListData.map((movie, index) => (
                            <MovieItem movieItem={ movie } key={ index } handleToggle={ handleToggle } /> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MyList
