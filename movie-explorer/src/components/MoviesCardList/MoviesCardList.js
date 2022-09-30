import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
function MovieCardList({ count, movies }) {

  return (
    <section className="section movieSection" aria-label="Фильмы">
      {/*<Preloader/>*/}
      <ul className="list movies">
        {movies.slice(0, count).map((movie, i) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </ul>
      <button className="button button_showMore">Ещё</button>
    </section>
  );
}

export default MovieCardList;
