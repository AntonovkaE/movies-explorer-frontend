import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSubmitSearch, isLoading, saveMovie, savedMovies }) {
  const [movieCount, setMovieCount] = useState(5);
  const [additionalCount, setAdditionalCount] = useState(2);
  const [isButtonHidden, setIsButtonHidden] = useState(!Boolean(movies.length));
  if (movies.length) {
    localStorage.setItem('foundMovies', JSON.stringify(movies));
  }
  console.log(movies);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMovieCount(5);
      setAdditionalCount(2);
    } else if (window.innerWidth < 1280) {
      setMovieCount(8);
      setAdditionalCount(2);
    } else {
      setMovieCount(12);
      setAdditionalCount(3);
    }
  };

  useEffect(() => {
    setIsButtonHidden(!Boolean(movies.length));
  }, [movies.length]);

  const showMoreMovies = () => {
    if ((movieCount + additionalCount) >= movies.length) {
      setMovieCount(movies.length);
      setIsButtonHidden(true);
    } else {
      setMovieCount(movieCount + additionalCount);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => setTimeout(handleResize, 10000));
  }, []);

  return (
    <>
      <SearchForm onSubmit={onSubmitSearch} sectionSearchInput="moviesSearchInput"/>
      <MoviesCardList savedMovies={savedMovies} handleButtonClick={saveMovie} count={movieCount}
                      movies={movies} section="movie">
        <Preloader isHidden={!isLoading}/>
      </MoviesCardList>
      <Button isHidden={isButtonHidden} onclick={showMoreMovies} text="Ещё" status="showMore"
              type="button"/>
    </>);
}

export default Movies;
