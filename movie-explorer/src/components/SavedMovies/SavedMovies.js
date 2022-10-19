import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, deleteMovie }) {
  const count = savedMovies.length;

  return (
    <section className="savedMovies">
      <SearchForm/>
      <MoviesCardList handleButtonClick={deleteMovie} cardButton="movieSaved" buttonCardText="" count={count} movies={savedMovies} savedMovies={savedMovies} section="savedMovie"/>
    </section>);
}

export default SavedMovies;
