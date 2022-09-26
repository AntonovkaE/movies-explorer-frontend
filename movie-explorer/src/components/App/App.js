import React, { useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Header isAuth={true}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies" element={<Movies movies={movies}/>}></Route>
          <Route path="/saved-movies" element={<Movies movies={movies}/>}></Route>
          <Route path="/profile" element={<Profile movies={movies}/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
