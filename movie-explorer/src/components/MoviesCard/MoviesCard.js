import React from 'react';
import first from '../../images/1.jpg'
import Button from '../Button/Button';

function MovieCard() {
  return (
    <li className="movie">
      <article>
        <h2 className="movie__title">В погоне за Бенкси</h2>
        <p className="movie__duration">27 минут</p>
        <img className="movie__img" alt="кадр фильма" src={first}/>
        <Button type="movie" status="saved"></Button>
      </article>
    </li>
  );
}

export default MovieCard;

