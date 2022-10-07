import React, { useEffect } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';

function MovieCardList({ count, movies, buttonCardText, cardButton, saveMovie }) {
  return (
    <section className="section movieSection" aria-label="Фильмы">
      <ul className="list movies">
        {movies.slice(0, count).map((movie, i) => (
          <MovieCard key={movie.movieId} movie={movie} buttonText={buttonCardText}
                     typeButton={cardButton} saveMovie={saveMovie}/>
        ))}
      </ul>
    </section>
  );
}

export default MovieCardList;
