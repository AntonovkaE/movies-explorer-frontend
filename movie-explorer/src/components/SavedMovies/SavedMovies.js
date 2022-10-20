import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, deleteMovie, onSubmitSearch, onToggleFilter }) {
  const count = savedMovies.length;

  return (
    <section className="savedMovies">
      <SearchForm onSubmit={onSubmitSearch} movies={savedMovies}/>
      <MoviesCardList handleButtonClick={deleteMovie} cardButton="movieSaved" buttonCardText="" count={count} movies={savedMovies} savedMovies={savedMovies} section="savedMovie"/>
    </section>);
}

export default SavedMovies;
