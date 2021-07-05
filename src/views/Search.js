import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../App"
import MovieItem from "../components/MovieItem"
import * as MovieAPI from '../MovieAPI'

function Search (props) {
 // get movies use api and set key
//   count search result.
    const { page, key } = useParams()

    const { setHeaderParams } = useContext(AppContext)
    const [ searchResult, setSearchResult ] = useState([])

    async function getSearchResult() {
        let result = []
        if (page === 'home') {
            result = await MovieAPI.getSearchResult(`movies?q=${ key }`)
        }
        else {
            result = await MovieAPI.getSearchResult(`movies?my_list=true&q=${ key }`)
            
        }
        setHeaderParams({ key: key, count: result.length })
        setSearchResult(result)
    }

    const handleToggle = async (itemData) => {
        if (!itemData.my_list) {
            await MovieAPI.addToList(itemData)
        }
        else {
            await MovieAPI.removeFromList(itemData)
        }
        getSearchResult()
    }

    useEffect(() => {
        getSearchResult()
    }, [key])

    return (
        <div className="titleList">
                <div className="title">
                <h1>Result</h1>
                    <div className="titles-wrapper">
                        {
                            searchResult.map((movie, index) => (
                                <MovieItem movieItem={ movie } key={ index } handleToggle= { handleToggle }/> 
                            ))
                        }
                    </div>
                </div>
            </div>
    )

    

}

export default Search