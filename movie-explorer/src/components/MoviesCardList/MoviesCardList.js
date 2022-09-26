import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
import first from '../../images/1.jpg';
import second from '../../images/2.jpg'
import third from '../../images/3.jpg'
import forth from '../../images/4.jpg'
import Preloader from '../Preloader/Preloader';

function MovieCardList() {
  return (
    <section className="section section_movieCardList" aria-label="Фильмы">
      {/*<Preloader/>*/}
      <ul className="list movies">
        <MovieCard key="1" srcImage={first}/>
        <MovieCard key="2" srcImage={second}/>
        <MovieCard key="3" srcImage={third}/>
        <MovieCard key="4" srcImage={forth}/>

        {/*{movies.map((movie, i) => (*/}
        {/*  <MovieCard key={movie._id} movie={movie}/>*/}
        {/*))}*/}
      </ul>
      <button className="button button_showMore">Ещё</button>

    </section>
  );
}

export default MovieCardList;
