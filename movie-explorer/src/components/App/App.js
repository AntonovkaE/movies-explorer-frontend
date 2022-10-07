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
import notFoundImage from '../../images/IMG_7838.jpeg';
import mainApi from '../../utils/MainApi';
import * as auth from '../utils/auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  const navigate = useNavigate();
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
          nameRU: movie.nameRU || movie.nameEN || '',
          image: `${movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : notFoundImage}`,
          trailerLink: movie.trailerLink || '',
          duration: movie.duration || '',
          movieId: movie.id,
          country: movie.country || '',
          director: movie.director || '',
          year: movie.year || '',
          nameEN: movie.nameEN || '',
          thumbnail: `${movie.thumbnail ? `https://api.nomoreparties.co/${movie.thumbnail}` : notFoundImage}`,
          owner: '63405e0295b5c505f118beb0',
        })));
      })
      .catch((err) => {
        navigate('/404');
      });
  };

  useEffect(() => {
    getInitialMovies();
    if (localStorage.foundMovies) {
      // console.log(localStorage.foundMovies)
      setFoundMovies(JSON.parse(localStorage.foundMovies));
    }
  }, []);

  const handleSignUpSubmit = (name, password, email) => {
    auth.register({ name, password, email })
      .catch(err => console.log(err));
  };
  const handleSignInSubmit = (email, password) => {
    // setUserEmail(email)
    // setLoggedIn(true)
    auth.login(password, email)
      .then(data => {
        if (data.token) {
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  };

  const handleSearch = (value) => {
    setFoundMovies(movies.filter((item) => {
      let search = new RegExp(`${value}`, 'gi');
      return (item.nameRU.search(search) !== -1);
    }));
    localStorage.setItem('searchInput', value);
  };

  const handleSaveMovie = (movie) => {
    console.log('сохранит');
    mainApi.saveMovie(movie)
      .catch(err => console.log(err));
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isAuth={true} showMenu={showMenu} onClose={closeMenu} isOpen={isNavigationOpen}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies"
                 element={<Movies movies={foundMovies} onSubmitSearch={handleSearch}
                                  saveMovie={handleSaveMovie}/>}></Route>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
