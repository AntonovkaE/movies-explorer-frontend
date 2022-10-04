import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSubmitSearch, isPreloaderHidden }) {
  const [movieCount, setMovieCount] = useState(5);
  const [additionalCount, setAdditionalCount] = useState(2);
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

  const showMoreMovies = () => {
    setMovieCount(movieCount + additionalCount);
  };

  useEffect(() => {
    window.addEventListener('resize', () => setTimeout(handleResize, 10000));
  }, []);

  return (
    <>
      <Preloader isHidden={true}/>
      <SearchForm onSubmit={onSubmitSearch}/>
      <MoviesCardList cardButton="success" buttonCardText="" count={movieCount} movies={movies}/>
      <Button onclick={showMoreMovies} text="Ещё" status="showMore" type="button"/>
    </>);
}

export default Movies;
