class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  saveMovie() {
    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: this._headers,
    }).then((res) => {
      this._checkPromise(res);
    });
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}movies`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._checkPromise(res));
  }

  deleteSavedMovie(id) {
    return fetch(`${this._baseUrl}movies/:${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkPromise(res));
  }
  getUser() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._checkPromise(res));
  }
  updateUser() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._checkPromise(res));
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movie.antonovskaya.nomoredomains.sbs/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
