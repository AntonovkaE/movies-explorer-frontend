import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import movieApi from '../../utils/MoviesApi';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const showMenu = () => {
    setIsNavigationOpen(true);
  };

  const closeMenu = () => {
    setIsNavigationOpen(false);
  };

  const getInitialMovies = () => {
    movieApi.getMovies()
      .then(movies => {
        setMovies(movies.map(movie => ({
          nameRU: movie.nameRU,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailerLink: movie.trailerLink,
          duration: movie.duration,
          id: movie.id,
        })));
      })
      .catch((err) => {
        navigate('/404');
      });
  };

  useEffect(() => {
    getInitialMovies();
    if (localStorage.foundMovies) {
      setFoundMovies(JSON.parse(localStorage.foundMovies))
    }
  }, []);

  const handleSearch = (value) => {
    setFoundMovies(movies.filter((item) => {
      let search = new RegExp(`${value}`, 'gi');
      return (item.nameRU.search(search) !== -1);
    }));
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    localStorage.setItem('searchInput', value);
  };
  return (
    <>
      <Header isAuth={true} showMenu={showMenu} onClose={closeMenu} isOpen={isNavigationOpen}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies"
                 element={<Movies movies={foundMovies} onSubmitSearch={handleSearch}/>}></Route>
          <Route path="/saved-movies" element={<SavedMovies movies={movies}/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/signin" element={<Login/>}></Route>
          <Route path="/404" element={<NotFoundPage/>}></Route>
          <Route exact path="*"
                 element={<Navigate replace to="/404"/>}
          />
        </Routes>
      </main>
      <NavigationPopup onClose={closeMenu} isOpen={isNavigationOpen}/>
      <Footer/>
    </>
  );
}

export default App;
