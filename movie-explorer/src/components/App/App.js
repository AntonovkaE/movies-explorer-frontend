import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import PrivateRoute from '../ProtectedRoute';
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
import notFoundImage from '../../images/backgrond-about.svg';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [resultForm, setResultForm] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const navigate = useNavigate();
  const showMenu = () => {
    setIsNavigationOpen(true);
  };

  const closeMenu = () => {
    setIsNavigationOpen(false);
  };
  const getInitialMovies = () => {
    movieApi.getMovies()
      .then(res => {
          setMovies(res.map(movie => ({
            nameRU: movie.nameRU || movie.nameEN || '',
            image: `${movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : notFoundImage}`,
            trailerLink: movie.trailerLink || '',
            duration: movie.duration || '',
            movieId: movie.id,
            country: movie.country || '',
            description: movie.description || '',
            director: movie.director || '',
            year: movie.year || '',
            nameEN: movie.nameEN || '',
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
          })));
          return movies;
        },
      )
      .catch((err) => {
        navigate('/404');
      });
  };

  useEffect(() => {
    getInitialMovies();
    if (localStorage.foundMovies) {
      setFoundMovies(JSON.parse(localStorage.foundMovies));
    }
  }, []);

  const handleSignUpSubmit = (name, email, password) => {
    auth.register({ name, email, password })
      .then((res) => {
        handleSignInSubmit(email, password);
        setResultForm({});
        navigate('/movies');
      })
      .catch(err => {
        if (err === 409) {
          setResultForm({ message: 'Пользователь с таким email уже существует.', error: true });
          return;
        }
        setResultForm({ message: 'При регистрации пользователя произошла ошибка.', error: true });
      });
  };
  const handleSignInSubmit = (email, password) => {
    auth.login({ password, email })
      .then(data => {
        handleTokenCheck();
        setResultForm({});
      })
      .catch(err => {
        if (err === 401) {
          setResultForm({ message: 'Вы ввели неправильный логин или пароль.', error: true });
        }
      });
  };

  const handleLogout = () => {
    console.log('выход');
    setResultForm({});
    localStorage.removeItem('jwt');
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('searchInput');
    setIsLoggedIn(false);
  };

  const handleSearch = (value) => {
    console.log(movies);
    setFoundMovies(movies.filter((item) => {
      let search = new RegExp(`${value}`, 'gi');
      return (item.nameRU.search(search) !== -1);
    }));
    localStorage.setItem('searchInput', value);
  };

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies])})
      .catch(err => console.log(err));
  };

  const getSavedMovies = () => {
    mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res)
      });
  };

  const handleUpdateUserData = (name, email) => {
    mainApi.updateUserData(name, email)
      .then((res) => {
        setResultForm({ message: 'Данные успешно обновлены', error: false });
        setCurrentUser(res);
      }).catch((err) => {
      console.log(err);
      if (err === 409) {
        setResultForm({ message: 'Пользователь с таким email уже существует.', error: true });
      }
    });
  };

  const handleTokenCheck = () => {
    auth.getContent()
      .then(res => {
        setIsLoggedIn(true);
        navigate('/movies');
        setCurrentUser(res);
      })
      .catch(res => setResultForm({
        message: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
        error: true,
      }));
  };

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      console.log('dc')
      handleTokenCheck();
      getSavedMovies();
    } else setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isAuth={true} showMenu={showMenu} onClose={closeMenu} isOpen={isNavigationOpen}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies"
                 element={<PrivateRoute loggedIn={isLoggedIn}><Movies movies={foundMovies}
                                                                      savedMovies={savedMovies}
                                                                      onSubmitSearch={handleSearch}
                                                                      saveMovie={handleSaveMovie}/></PrivateRoute>}></Route>
          <Route path="/saved-movies" element={<PrivateRoute loggedIn={isLoggedIn}><SavedMovies
            savedMovies={savedMovies}/></PrivateRoute>}></Route>
          <Route path="/profile"
                 element={<PrivateRoute loggedIn={isLoggedIn}><Profile formResult={resultForm}
                                                                       currentUser={currentUser}
                                                                       onSubmit={handleUpdateUserData}
                                                                       onLogout={handleLogout}/></PrivateRoute>}></Route>
          <Route path="/signup"
                 element={<Register onRegistration={handleSignUpSubmit} currentUser={currentUser}
                                    formResult={resultForm}/>}></Route>
          <Route path="/signin"
                 element={<Login onSubmit={handleSignInSubmit} currentUser={currentUser}
                                 formResult={resultForm}/>}></Route>
          <Route path="/404" element={<NotFoundPage/>}></Route>
          <Route exact path="*"
                 element={isLoggedIn ? <Navigate replace to="/404"/> : <Navigate replace to="/"/>}
          />
        </Routes>
      </main>
      <NavigationPopup onClose={closeMenu} isOpen={isNavigationOpen}/>
      <Footer/>
    </CurrentUserContext.Provider>
  );
}

export default App;
