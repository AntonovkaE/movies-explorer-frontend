import React, { useContext } from 'react';
import './MoviesCard.css';
import Button from '../Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MovieCard({ movie, onButtonClick, savedMovies, cardSection }) {
  const {
    country,
    director,
    duration,
    year,
    image,
    trailerLink,
    nameRU,
    owner,
  } = movie;
  const currentUser = useContext(CurrentUserContext);

  const isMovieSaved = savedMovies.some(item => item.movieId === movie.movieId);
  const buttonText = isMovieSaved ? '' : 'Сохранить';
  const buttonClass = (cardSection === 'savedMovie') ? 'savedMovie' : isMovieSaved ? 'success' : '';
  const isDisabledButton = (cardSection !== 'savedMovie' || owner === currentUser._id) ? false : true;
  const handleButtonClick = (e) => {
    e.preventDefault();
    onButtonClick(movie, isMovieSaved);
  };

  return (
    <li className="movie">
      <a className="movie__link" href={trailerLink}>
        <article className="movie__article">
          <div className="movie__header">
            <h2 className="movie__title">{nameRU}</h2>
            <p className="movie__duration">{duration} минут</p>
          </div>
          <img className="movie__img" alt="кадр фильма"
               src={image}/>
          <Button isDisable={isDisabledButton}
                  onclick={handleButtonClick} type="button" status={`${buttonClass} button_movie`}
                  text={buttonText}></Button>
        </article>
      </a>
    </li>
  );
}

export default MovieCard;

