import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSubmitSearch, isPreloaderHidden }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMiddleScreen, setIsMiddleScreen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else if (window.innerWidth < 1280) {
      setIsMobile(false);
      setIsMiddleScreen(true);
    } else {
      setIsMobile(false);
      setIsMiddleScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  const movieCount = isMobile ? 5 : isMiddleScreen ? 8 : 12;

  return (
    <>
      <Preloader isHidden={true}/>
      <SearchForm onSubmit={onSubmitSearch}/>
      <MoviesCardList cardButton="success" buttonCardText="" count={movieCount} movies={movies}/>
      <Button text="Ещё" status type="showMore"/>
    </>);
}

export default Movies;
