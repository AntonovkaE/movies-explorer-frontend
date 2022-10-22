import React, { useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useLocation } from 'react-router-dom';

function SavedMovies({ savedMovies, deleteMovie, onSubmitSearch, isSearchResult, setIsSearchResult }) {
  const count = savedMovies.length;
  const location = useLocation()

  useEffect(()=> {
    setIsSearchResult(false)
  }, [location])

  return (
    <section className="savedMovies">
      <SearchForm onSubmit={onSubmitSearch} sectionSearchInput='savedMoviesSearchInput'/>
      <MoviesCardList sectionSearchInput='savedMoviesSearchInput' handleButtonClick={deleteMovie} cardButton="movieSaved" buttonCardText="" count={count} movies={savedMovies} savedMovies={savedMovies} section="savedMovie"/>
    </section>);
}

export default SavedMovies;
