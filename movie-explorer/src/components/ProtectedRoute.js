import { Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ loggedIn, children }) => {
  console.log(children);
  return loggedIn ? children : <Navigate to="/sign-in"/>;
};

const AuthRoute = ({ loggedIn, children }) => {
  console.log(loggedIn);
  return loggedIn ? <Navigate to="/movies"/> : children;
};

export { PrivateRoute, AuthRoute };
