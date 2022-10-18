import React from 'react';
import './MoviesCard.css';
import Button from '../Button/Button';

function MovieCard({ movie, saveMovie, buttonText, typeButton }) {
  const {
    country,
    director,
    duration,
    year,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = movie;
  const handleSaveMovie = (e) => {
    e.preventDefault();
    saveMovie(movie);
  };

  return (
    <li className="movie">
      <article className="movie__article">
        <div className="movie__header">
          <h2 className="movie__title">{nameRU}</h2>
          <p className="movie__duration">{duration} минут</p>
        </div>
        <img className="movie__img" alt="кадр фильма"
             src={image}/>
        <Button onclick={handleSaveMovie} type="button" status="movie" text="Сохранить"></Button>
      </article>
    </li>
  );
}

export default MovieCard;

