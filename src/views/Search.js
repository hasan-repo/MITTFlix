import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../App"
import MovieItem from "../components/MovieItem"
import * as MovieAPI from '../MovieAPI'

function Search (props) {
 // get movies use api and set key
//   count search result.
    const { page, key } = useParams()

    const {  } = useContext(AppContext)
    const [  setSearchResult ] = useState([])

    async function getSearchResult() {
        let result = []
        if (page === 'home') {
            result = await MovieAPI.getSearchResult(`movies?q=${ key }`)
        }
        else {
            result = await MovieAPI.getSearchResult(`movies?my_list=true&q=${ key }`)
            
        }
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

    

}

export default Search