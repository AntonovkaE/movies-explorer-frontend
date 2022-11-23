export const BASE_URL = 'https://api.movie.antonovskaya.nomoredomains.sbs/';

function _checkPromise(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(res => {
    return _checkPromise(res);
  });
};

export const login = ({ password, email }) => {
  return fetch(`${BASE_URL}signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  }).then(res => {
    return _checkPromise(res);
  }).then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    }
  });
};

export const getContent = () => {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(res => {
      return _checkPromise(res);
    });
};
