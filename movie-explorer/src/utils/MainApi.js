class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  saveMovie(movie) {
    const token = localStorage.jwt
    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(movie)
    }).then((res) => this._checkPromise(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.jwt}`
      },
    }).then((res) => this._checkPromise(res));
  }

  deleteSavedMovie(id) {
    return fetch(`${this._baseUrl}movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.jwt}`
      },
    }).then((res) => {
      return this._checkPromise(res);});
  }
  getUserData(bearer) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${bearer}`
      },
    }).then((res) => {
      console.log(res, bearer)
      return this._checkPromise(res);});
  }

  updateUserData(name, email) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        "name": name,
        "email": email
      })
    }).then((res) => this._checkPromise(res));
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movie.antonovskaya.nomoredomains.sbs/',
});

export default mainApi;
