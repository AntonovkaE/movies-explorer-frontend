import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
function MovieCardList({ movies }) {
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
  const movieContent = (movieCount, movies) => movies.slice(0, movieCount);
  return (
    <section className="section section_movieCardList" aria-label="Фильмы">
      {/*<Preloader/>*/}
      <ul className="list movies">
        {movies.slice(0, movieCount).map((movie, i) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </ul>
      <button className="button button_showMore">Ещё</button>
    </section>
  );
}

export default MovieCardList;
