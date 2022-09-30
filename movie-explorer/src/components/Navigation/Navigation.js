import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation({ isNavigationHidden, isFullScreen, onClose = () => {} }) {
  return (<ul
    className={`list navigation  ${isNavigationHidden ? 'navigation_hidden' : 'navigation_auth'} ${isFullScreen ? 'navigation_fullScreen' : ''}`}>
    <li
      className={`navigation__item ${!isFullScreen ? 'navigation__item_hidden' : 'navigation__item_fullScreen'}`}>
      <NavLink onClick={onClose}
               className="navigation__link link"
               to="/">Главная</NavLink></li>
    <li className={`navigation__item ${isFullScreen ? 'navigation__item_fullScreen' : ''}`}><NavLink
      onClick={onClose} className="navigation__link link"
      to="/movies">Фильмы</NavLink></li>
    <li className={`navigation__item ${isFullScreen ? 'navigation__item_fullScreen' : ''}`}><NavLink
      onClick={onClose} className="menu__link link" to="/saved-movies">Сохранённые
      фильмы</NavLink></li>
    <li
      className={`navigation__item navigation__item_account ${isFullScreen ? 'navigation__item_fullScreen navigation__item_down' : ''}`}>
      <NavLink onClick={onClose}
               className={`link navigation__link ${isFullScreen ? 'navigation__link_fullScreen' : ''}`}
               to="/profile">Аккаунт
      </NavLink> <img className="navigation__accountImg"
                      src={accountIcon} alt="иконка пользователя"/></li>
  </ul>);
}

export default Navigation;
