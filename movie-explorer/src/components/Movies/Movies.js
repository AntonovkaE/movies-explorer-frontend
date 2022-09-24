import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies }) {
  return (
    <>
      <SearchForm/>
      <MoviesCardList movies={movies}/>
    </>);
}

export default Movies;
