import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';

function MovieCardList({ count, movies, handleButtonClick, savedMovies, section }) {
  const isNotFound = movies.length === 0;
  console.log(movies)
  return (
    <section className="section movieSection" aria-label="Фильмы">
      {isNotFound ? <h2 className="movieSection__title">Ничего не найдено</h2> : ''}
      <ul className="list movies">
        {movies.slice(0, count).map((movie, i) => (
          <MovieCard key={i} movie={movie} savedMovies={savedMovies}
                     onButtonClick={handleButtonClick} cardSection={section}/>
        ))}
      </ul>
    </section>
  );
}

export default MovieCardList;
