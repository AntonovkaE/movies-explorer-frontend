import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import movieApi from '../../utils/MoviesApi';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [movies, setMovies] = useState([]);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const showMenu = () => {
    setIsNavigationOpen(true);
  };

  const closeMenu = () => {
    setIsNavigationOpen(false);
  };

  const getInitialMovies = () => {
    movieApi.getMovies()
      .then((res) => {
        setMovies(res)
      })
  }

  useEffect(() => {
    getInitialMovies()
  }, [])

  return (
    <>
      <Header isAuth={true} showMenu={showMenu} onClose={closeMenu} isOpen={isNavigationOpen}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies" element={<Movies movies={movies}/>}></Route>
          <Route path="/saved-movies" element={<SavedMovies movies={movies}/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/signin" element={<Login/>}></Route>
        </Routes>
      </main>
      <NavigationPopup onClose={closeMenu} isOpen={isNavigationOpen}/>
      <Footer/>
    </>
  );
}

export default App;
