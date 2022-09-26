import React from 'react';
import './MoviesCard.css';
import Button from '../Button/Button';

function MovieCard({ srcImage }) {
  return (
    <li className="movie">
      <article className="movie__article">
        <div className="movie__header">
          <h2 className="movie__title">В погоне за Бенкси</h2>
          <p className="movie__duration">27 минут</p>
        </div>
        <img className="movie__img" alt="кадр фильма" src={srcImage}/>
        <Button type="movie" status="saved"></Button>
      </article>
    </li>
  );
}

export default MovieCard;

