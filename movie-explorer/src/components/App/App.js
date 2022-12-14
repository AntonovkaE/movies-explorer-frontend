import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthRoute, PrivateRoute } from '../ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import movieApi from '../../utils/MoviesApi';
import SavedMovies from '../SavedMovies/SavedMovies';
import notFoundImage from '../../images/backgrond-about.svg';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import Footer from '../Footer/Footer';
import isURL from 'validator/lib/isURL';
import { shortMovieDuration } from '../../utils/variables';

function App() {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [isSearchInSavedMovies, setIsSearchInSavedMovies] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [resultForm, setResultForm] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.jwt || false);
  const navigate = useNavigate();
  const showMenu = () => {
    setIsNavigationOpen(true);
  };

  const closeMenu = () => {
    setIsNavigationOpen(false);
  };

  useEffect(() => {
    setFoundMovies(localStorage.foundMovies ? JSON.parse(localStorage.foundMovies) : []);
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
          setResultForm({ message: '???????????????????????? ?? ?????????? email ?????? ????????????????????.', error: true });
          return;
        }
        setResultForm({ message: '?????? ?????????????????????? ???????????????????????? ?????????????????? ????????????.', error: true });
      });
  };
  const handleSignInSubmit = (email, password) => {
    auth.login({ password, email })
      .then(data => {
        setIsLoggedIn(true);
        navigate('/movies');
        setResultForm({});
      })
      .catch(err => {
        if (err === 401) {
          setResultForm({ message: '???? ?????????? ???????????????????????? ?????????? ?????? ????????????.', error: true });
        }
      });
  };

  const handleLogout = () => {
    setResultForm({});
    localStorage.clear();
    setMovies([]);
    setFoundMovies([]);
    setSavedMovies([]);
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const filterMovies = (movies, value, isShort) => {
    let search = new RegExp(`${value}`, 'gi');
    if (!value && !isShort) {
      return movies;
    }
    const filteredMovies = movies.filter((item) => {
      if (isShort) {
        return (item.nameRU.search(search) !== -1 && item.duration < shortMovieDuration);
      }
      return (item.nameRU.search(search) !== -1);
    });
    return filteredMovies;
  };

  const checkTrailerLink = (link) => {
    const resultLink =  isURL(link) ? link : 'https://youtube.com/';
    return resultLink
  }

  const handleSearch = (value, isShort) => {
    setIsLoading(true);
    let receivedMovies;
    if (!movies.length) {
      movieApi.getMovies()
        .then(res => {
            receivedMovies = res.map(movie => ({
              nameRU: movie.nameRU || movie.nameEN || '',
              image: `${movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : notFoundImage}`,
              trailerLink: checkTrailerLink(movie.trailerLink),
              duration: movie.duration || '',
              movieId: movie.id,
              country: movie.country || '',
              description: movie.description || '',
              director: movie.director || '',
              year: movie.year || '',
              nameEN: movie.nameEN || '',
              thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            }));
            setMovies(receivedMovies);
            return movies;
          },
        ).then(res => {
        setFoundMovies(filterMovies(receivedMovies, value, isShort));
      })
        .catch((err) => {
          handleTokenCheck();
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setFoundMovies(filterMovies(movies, value, isShort));
      setIsLoading(false);
    }
  };

  const handleSavedMoviesSearch = (value, isShort) => {
    setFoundSavedMovies(filterMovies(savedMovies, value, isShort));
    setIsSearchInSavedMovies(true);
  };

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch(err => handleTokenCheck());
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = !movie._id ? savedMovies.find((item) => item.movieId === movie.movieId) : movie;
    mainApi.deleteSavedMovie(savedMovie._id)
      .then((res) => {
        setSavedMovies((state) => state.filter(c => c.movieId !== movie.movieId));
        if (isSearchInSavedMovies) {
          setFoundSavedMovies((state) => state.filter(c => c.movieId !== movie.movieId));
        }
      })
      .catch(err => {
        handleTokenCheck();
        if (err === 403) {
          console.log('???????????? ?????????????? ?????????? ????????????????');
        }
      });
  };

  const onCardClick = (movie, isSaved) => {
    if (isSaved) {
      handleDeleteMovie(movie);
    } else {
      handleSaveMovie(movie);
    }
  };

  const getSavedMovies = () => {
    mainApi.getSavedMovies()
      .then((res) => {
        const savedMoviesList = res.filter(c => c.owner === currentUser._id)
        setSavedMovies(savedMoviesList);
        localStorage.setItem('savedMovies', JSON.stringify(savedMoviesList))
      })
      .catch((err) => {
        console.log(err);
        handleTokenCheck();
      });
  };

  const handleUpdateUserData = (name, email) => {
    mainApi.updateUserData(name, email)
      .then((res) => {
        setResultForm({ message: '???????????? ?????????????? ??????????????????', error: false });
        setCurrentUser(res);
      }).catch((err) => {
      handleTokenCheck();
      console.log(err);
      if (err === 409) {
        setResultForm({ message: '???????????????????????? ?? ?????????? email ?????? ????????????????????.', error: true });
      }
    });
  };

  const handleTokenCheck = () => {
    auth.getContent()
      .then(res => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch(res => {
        handleLogout();
        setResultForm({
          message: '?????? ?????????????????????? ?????????????????? ????????????. ?????????? ???? ?????????????? ?????? ?????????????? ???? ?? ?????? ??????????????.',
          error: true,
        });
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      handleTokenCheck();
    } else setIsLoggedIn(false);
  }, [isLoggedIn]);

  useEffect(() => {
    if (localStorage.jwt) {
      handleTokenCheck();
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isAuth={isLoggedIn} showMenu={showMenu} onClose={closeMenu}
              isOpen={isNavigationOpen}/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies" element={<PrivateRoute loggedIn={isLoggedIn}>
            <Movies movies={foundMovies}
                    isLoading={isLoading}
                    savedMovies={savedMovies}
                    onSubmitSearch={handleSearch}
                    saveMovie={onCardClick}/></PrivateRoute>}></Route>
          <Route path="/saved-movies" element={<PrivateRoute loggedIn={isLoggedIn}>
            <SavedMovies
              getMovies={getSavedMovies}
              isSearchResult={isSearchInSavedMovies}
              setIsSearchResult={setIsSearchInSavedMovies}
              savedMovies={isSearchInSavedMovies ? foundSavedMovies : savedMovies}
              deleteMovie={onCardClick}
              onSubmitSearch={handleSavedMoviesSearch}/></PrivateRoute>}></Route>
          <Route path="/profile" element={<PrivateRoute loggedIn={isLoggedIn}>
            <Profile resultForm={resultForm}
                     setResultForm={setResultForm}
                     currentUser={currentUser}
                     onSubmit={handleUpdateUserData}
                     onLogout={handleLogout}/></PrivateRoute>}></Route>
          <Route path="/signup"
                 element={<AuthRoute loggedIn={isLoggedIn}><Register
                   onRegistration={handleSignUpSubmit} currentUser={currentUser}
                   formResult={resultForm}/></AuthRoute>}></Route>
          <Route path="/signin"
                 element={<AuthRoute loggedIn={isLoggedIn}>
                   <Login onSubmit={handleSignInSubmit} currentUser={currentUser}
                          formResult={resultForm}/>
                 </AuthRoute>}></Route>
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
