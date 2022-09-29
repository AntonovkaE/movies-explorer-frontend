import React, { useState } from 'react';
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

function App() {
  const [movies, setMovies] = useState([]);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const showMenu = () => {
    setIsNavigationOpen(true);
  };

  const hideMenu = () => {
    setIsNavigationOpen(false);
  };
  return (
    <>
      <Header isAuth={false} showMenu={showMenu} onClose={hideMenu} isOpen={isNavigationOpen}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies" element={<Movies movies={movies}/>}></Route>
          <Route path="/saved-movies" element={<Movies movies={movies}/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/signin" element={<Login/>}></Route>
        </Routes>
      </main>
      <NavigationPopup onClose={hideMenu} isOpen={isNavigationOpen}/>
      <Footer/>
    </>
  );
}

export default App;
