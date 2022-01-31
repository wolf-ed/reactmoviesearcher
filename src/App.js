import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';
import React, { Fragment, useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [movieArrayState, setMovieArrayState] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ceca4382ddb7b75aa888c02c48aca553&page=1';

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ceca4382ddb7b75aa888c02c48aca553&query="';

  async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    setMovieArrayState([]);
    data.results.forEach((movie) => {
      const newMovie = {
        title: movie.title,
        poster_path: IMG_PATH + movie.poster_path,
        vote_average: movie.vote_average,
        overview: movie.overview
      };
      setMovieArrayState(prevState => { return [newMovie, ...prevState] })
    })
  }

  const inputHandler = newValue => {
    setInputValue(newValue)
  }

  //Display initial array of movies when open the page
  useEffect(() => {
    getMovies(API_URL)
  }, [])

  useEffect(() => {
    if(inputValue !== ''){
      getMovies(SEARCH_API + inputValue)
    }
  }, [inputValue])



  return (
    <Fragment>
      <Header onInput={inputHandler} />
      <MoviesList moviesArray={movieArrayState} />
    </Fragment>
  );
}

export default App;
