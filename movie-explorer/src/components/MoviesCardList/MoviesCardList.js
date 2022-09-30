import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
function MovieCardList({ count, movies, buttonCardText, cardButton }) {

  return (
    <section className="section movieSection" aria-label="Фильмы">
      <ul className="list movies">
        {movies.slice(0, count).map((movie, i) => (
          <MovieCard key={movie.id} movie={movie} buttonText={buttonCardText} typeButton={cardButton}/>
        ))}
      </ul>
    </section>
  );
}

export default MovieCardList;
