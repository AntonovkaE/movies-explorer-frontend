import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';

function MovieCardList() {
  return (
    <section className="section section_movieCardList" aria-label="Фильмы">
      <ul className="list movies">
        <MovieCard key="1" />
        {/*{movies.map((movie, i) => (*/}
        {/*  <MovieCard key={movie._id} movie={movie}/>*/}
        {/*))}*/}
      </ul>

    </section>
  );
}

export default MovieCardList;
