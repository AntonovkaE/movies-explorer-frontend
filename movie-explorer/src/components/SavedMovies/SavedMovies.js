import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies }) {
  const count = 3;
  return (
    <section className="savedMovies">
      <SearchForm/>
      <MoviesCardList cardButton="movieSaved" buttonCardText="" count={count} movies={[]} savedMovies={savedMovies}/>
    </section>);
}

export default SavedMovies;
