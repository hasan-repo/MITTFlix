import React, { useCallback, useState } from 'react'; //path from server
import { useAppState } from '../Context/index';

const netflixId = 8;
const craveId = 230;
const disneyId = 337;
const applePlusId = 350;

const myAPI = '37a6d5303d39d86c13f75869cef856bd';


const URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&watch_region=CA&api_key=${myAPI}`;
const searchURL = `https://api.themoviedb.org/3/search/tv?watch_region=CA&api_key=${myAPI}`;
const detailsURL = `https://api.themoviedb.org/3/tv`;

// get request to all tv shows 
export async function getTvShows() {

  try {
    let promise1 = fetch(`${URL}&with_watch_providers=${netflixId}`);
    let promise2 = fetch(`${URL}&with_watch_providers=${craveId}`);
    let promise3 = fetch(`${URL}&with_watch_providers=${disneyId}`);
    let promise4 = fetch(`${URL}&with_watch_providers=${applePlusId}`);

    const result = await Promise.all([
      promise1,
      promise2,
      promise3,
      promise4
    ]).then((values) => {
      return values;
    });

    const dataFromNetflix = await result[0].json();
    const dataFromCrave = await result[1].json();
    const dataFromDisney = await result[2].json();
    const dataFromApplePlus = await result[3].json();

    return [dataFromNetflix, dataFromCrave, dataFromDisney, dataFromApplePlus];

  } catch (error) {
    console.error(error);
  }
}

// -- get request with search query parameters to find movie
export async function searchMovies(search) {

  try {
    let response = await fetch(`${searchURL}&query=${search}`); /////patch from server with fetch
    const result = await response.json();

    return result;

  } catch (error) {
    console.error(error);
  }
}


// - get request to get full details of shows
export async function getFullDetails(id) {

  try {
    let response = await fetch(`${detailsURL}/${id}?api_key=${myAPI}`);
    const result = await response.json();

    return result;

  } catch (error) {
    console.error(error);
  }
}


// set Added  icon 
export function useCheckAddedState() {
  const { watchlist } = useAppState();
  const [state, setState] = useState([])

  const setAddedIcon = useCallback((shows) => {

    if (
      Array.isArray(shows) &&
      watchlist !== undefined &&
      watchlist.length > 0 &&
      shows !== undefined &&
      shows.length > 0
    ) {
      if (shows[0].results === undefined) {
        shows.map((movie, key2) => {
          watchlist.map(list => {
            if (list.id === movie.id) {
              shows[key2].checked = true;
            }
          })
        })
      } else {
        shows.map((data, key1) => {
          data.results.map((movie, key2) => {
            watchlist.map(list => {
              if (list.id === movie.id) {
                data.results[key2].checked = true;
              }
            })
          })
        })

      }

    } else if (
      !Array.isArray(shows) &&
      watchlist !== undefined &&
      watchlist.length > 0
    ) {
      shows.results.map((movie3, ke3) => {
        watchlist.map(list => {
          if (list.id === movie3.id) {
            shows.results[ke3].checked = true;
          }
        })
      })
    }

    setState([...state, shows]);//// reat of the stare
  }, []);

  return [state, setAddedIcon];
}


