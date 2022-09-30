import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies }) {
  const count = 3;
  return (
    <>
      <SearchForm/>
      <MoviesCardList count={count} movies={movies}/>
    </>);
}

export default SavedMovies;
