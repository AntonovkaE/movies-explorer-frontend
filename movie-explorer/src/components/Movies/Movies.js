import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies }) {
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
      setIsMiddleScreen(false)}
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  const movieCount = isMobile ? 5 : isMiddleScreen ? 8 : 12;
  return (
    <>
      <SearchForm/>
      <MoviesCardList count={movieCount} movies={movies}/>
    </>);
}

export default Movies;
