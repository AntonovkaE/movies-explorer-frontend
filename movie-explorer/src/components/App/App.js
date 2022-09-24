import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import '../../vendor/normalize.css';
import '../../vendor/fonts/inter.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Header isAuth={true}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies" element={<Movies movies={movies}/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
