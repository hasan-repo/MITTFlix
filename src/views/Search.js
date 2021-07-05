import React from 'react'
import MovieItem from "../components/MovieItem"
import * as MovieAPI from '../MovieAPI'

function Search (props) {
 // get movies use api and set key
//   count search result.

    async function getSearchResult() {
        let result = []
        if (page === '') {
            result = await MovieAPI.getSearchResult(`movies?q=${ key }`)
        }
        else {
            result = await MovieAPI.getSearchResult(`movies?my_list=true&q=${ key }`)
            
        }

}

export default Search