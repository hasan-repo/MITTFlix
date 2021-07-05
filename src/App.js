import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/Header"
// import GenreItem from "./components/GenreItem"
import Home from "./views/Home"
import MyList from './views/MyList';
import MovieDetail from "./views/MovieDetail"

// import * as MovieAPI from './MovieAPI';



function App () {
  
    
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
