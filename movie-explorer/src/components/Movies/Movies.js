import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';
import {
  largeScreenAdditionalMovieCount,
  largeScreenMovieCount,
  middleScreen,
  middleScreenMovieCount,
  smallScreenAdditionalMovieCount,
  smallScreenMovieCount,
} from '../../utils/variables';

function Movies({ movies, onSubmitSearch, isLoading, saveMovie, savedMovies }) {
  const [movieCount, setMovieCount] = useState(5);
  const [additionalCount, setAdditionalCount] = useState(2);
  const [isButtonHidden, setIsButtonHidden] = useState(!Boolean(movies.length));
  if (movies.length) {
    localStorage.setItem('foundMovies', JSON.stringify(movies));
  }
  const handleResize = () => {
    setMovieCount(window.innerWidth < middleScreen ? smallScreenMovieCount : window.innerWidth < middleScreen ? middleScreenMovieCount : largeScreenMovieCount);
    setAdditionalCount(window.innerWidth < middleScreen ? smallScreenAdditionalMovieCount : largeScreenAdditionalMovieCount);
  };
  useEffect(() => {
    setIsButtonHidden(movieCount > movies.length);
  }, [movies, movieCount]);

  useEffect(() => {
    handleResize();
  }, [window.innerWidth]);

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
      <MoviesCardList sectionSearchInput="moviesSearchInput" savedMovies={savedMovies}
                      handleButtonClick={saveMovie} count={movieCount}
                      movies={movies} section="movie">
        <Preloader isHidden={!isLoading}/>
      </MoviesCardList>
      <Button isHidden={isButtonHidden} onclick={showMoreMovies} text="Ещё" status="showMore"
              type="button"/>
    </>);
}

export default Movies;
