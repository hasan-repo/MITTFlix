import React, { useState, useEffect, createContext } from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from "./components/Header"
// import GenreItem from "./components/GenreItem"
import Home from "./views/Home"
import MyList from './views/MyList';
import MovieDetail from "./views/MovieDetail"

import * as MovieAPI from './MovieAPI'

export const AppContext = createContext()




function App () {
  //add and remove to my list
  const [ moviesData, setMoviesData ] = useState([])
	

	const handleToggle = async (itemData) => {
        if (!itemData.my_list) {
            await MovieAPI.addToList(itemData)
        }
        else {
            await MovieAPI.removeFromList(itemData)
        }
    }

    //fetch movies
    useEffect(() => {
        async function fetchAllMovies() {
            const movies = await MovieAPI.getAll()
            return movies
        }
        async function fetchGenres() {
            const all_movies = await fetchAllMovies()
            let genre = await MovieAPI.genres()

            for(let i = 0; i < genre.length; i ++) {
                genre[i]['movies'] = all_movies.filter(item => item.genre_ids.includes(genre[i]['id']) === true)
            }
            setMoviesData(genre)
        }
        
        fetchGenres()
    }, [handleToggle])
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path='/detail/:id' component={ MovieDetail } />
          <Route path='/my-list' component={ MyList } />
			</Switch>
        
      </>

    );
  
}

export default App;
