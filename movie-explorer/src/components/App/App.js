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
import * as auth from '../../utils/auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [resultForm, setResultForm] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        handleSignInSubmit(email, password)
        navigate('/movies')
      })
      .catch(err => {
        if (err === 409) {
          setResultForm({message: 'Пользователь с таким email уже существует.', error: true  })
          return
        }
        setResultForm({message: 'При регистрации пользователя произошла ошибка.', error: true  })
      });
  };
  const handleSignInSubmit = (email, password) => {
    auth.login({ password, email })
      .then(data => {
        handleTokenCheck()
      })
      .catch(err => {
        if (err === 401) {
          setResultForm({message: 'Вы ввели неправильный логин или пароль.', error: true  })
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    // setIsLoggedIn(false)
  }

  const handleSearch = (value) => {
    setFoundMovies(movies.filter((item) => {
      let search = new RegExp(`${value}`, 'gi');
      return (item.nameRU.search(search) !== -1);
    }));
    localStorage.setItem('searchInput', value);
  };

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .catch(err => console.log(err));
  };

  const handleUpdateUserData = (name, email) => {
    mainApi.updateUserData(name, email)
      .then((res) => {
        setResultForm({ message: 'Данные успешно обновлены', error: false })
        setCurrentUser(res)
      }).catch((err) => {
        console.log(err)
      if (err === 409) {
        setResultForm({message: 'Пользователь с таким email уже существует.', error: true  })
      }
    })
  };

  const handleTokenCheck = () => {
      auth.getContent()
        .then(res => {
            setIsLoggedIn(true)
            navigate('/movies')
            setCurrentUser(res)
        })
        .catch(res => setResultForm({message: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.', error: true  }))
    }

  useEffect(() => {

    if (localStorage.getItem('jwt')) {
      handleTokenCheck()
    } else setIsLoggedIn(false)
    //   const jwt = localStorage.getItem('jwt');
    //   console.log(jwt)
    //   mainApi.getUserData(jwt)
    //     .then((res) => {
    //       setCurrentUser(res)
    //     })
    // }

  }, [])


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
          <Route path="/profile" element={<Profile formResult={resultForm} currentUser={currentUser} onSubmit={handleUpdateUserData} onLogout={handleLogout}/>}></Route>
          <Route path="/signup" element={<Register onRegistration={handleSignUpSubmit} currentUser={currentUser} formResult={resultForm} />}></Route>
          <Route path="/signin" element={<Login onSubmit={handleSignInSubmit} currentUser={currentUser} formResult={resultForm}/>}></Route>
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
