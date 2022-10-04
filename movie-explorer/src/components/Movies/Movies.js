import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSubmitSearch, isPreloaderHidden }) {
  const [movieCount, setMovieCount] = useState(5);
  const [additionalCount, setAdditionalCount] = useState(2)
  // const [isMobile, setIsMobile] = useState(false);
  // const [isMiddleScreen, setIsMiddleScreen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      // setIsMobile(true);
      setMovieCount(5);
      setAdditionalCount(2)
    } else if (window.innerWidth < 1280) {
      setMovieCount(8)
      // setIsMobile(false);
      // setIsMiddleScreen(true);
      setAdditionalCount(2)
    } else {
      setMovieCount(12)
      // setIsMobile(false);
      // setIsMiddleScreen(false);
      setAdditionalCount(3)
    }
  };
  console.log(movies.length)

  const showMoreMovies = () => {
    setMovieCount(movieCount + additionalCount);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  // setMovieCount(isMobile ? 5 : isMiddleScreen ? 8 : 12);

  return (
    <>
      <Preloader isHidden={true}/>
      <SearchForm onSubmit={onSubmitSearch}/>
      <MoviesCardList cardButton="success" buttonCardText="" count={movieCount} movies={movies}/>
      <Button onclick={showMoreMovies} text="Ещё" status="showMore" type="button"/>
    </>);
}

export default Movies;
