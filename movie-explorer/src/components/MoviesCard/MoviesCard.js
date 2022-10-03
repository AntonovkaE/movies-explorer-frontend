import React from 'react';
import './MoviesCard.css';
import Button from '../Button/Button';

function MovieCard({ movie, buttonText, typeButton }) {
  return (
    <li className="movie">
      <article className="movie__article">
        <div className="movie__header">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__duration">{movie.duration} минут</p>
        </div>
        <img className="movie__img" alt="кадр фильма"
             src={`${movie.image}`}/>
        <Button type="" status="movie" text="Сохранить"></Button>
      </article>
    </li>
  );
}

export default MovieCard;

