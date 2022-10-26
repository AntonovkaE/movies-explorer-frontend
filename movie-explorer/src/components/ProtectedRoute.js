import { Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ loggedIn, children }) => {
  return loggedIn ? children : <Navigate to="/sign-in"/>;
};

const AuthRoute = ({ loggedIn, children }) => {
  return loggedIn ? <Navigate to="/movies"/> : children;
};

export { PrivateRoute, AuthRoute };
