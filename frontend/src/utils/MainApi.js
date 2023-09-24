// plan goes here
export const BEATFILM_URL =
  'https://api.nomoreparties.co/';

class Api {
  constructor({ url, headers }) {
    this._url = url; // https://api.swearwolfie.movies.nomoreparties.sbs/
    this._headers = headers;
  }

  getToken(jwt) {
    this._headers.authorization = `Bearer ${jwt}`;
  }

  checkResponse(response) {
    // отдельная функция для общения с сервером
    if (response.ok) {
      return response.json(); // Promise.resolve
    } else {
      return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
    }
  }

  getMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}${"movies"}`, {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`
      },
    }).then(this.checkResponse);
  }

  deleteMovie(id) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}${"movies/"}${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`
      },
    }).then(this.checkResponse);
  }

  createMovie(data) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}${"movies"}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: BEATFILM_URL + data.image.url,
        trailer: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: BEATFILM_URL + data.image.formats.thumbnail.url,
        movieId: data.id,
      }),
    }).then(this.checkResponse);
  }

  getCurrentUser()  {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}${"users/me"}`, {
      headers: {
    "Content-type": "application/json",
    authorization: `Bearer ${token}`
  },
    }).then(this.checkResponse);
  }

  changeUser(name, email) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}${"users/me"}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this.checkResponse);
  }

  // changeLikeCardStatus(id, isLiked) {
  //   return fetch(`${this._url}${"cards/"}${id}${"/likes"}`, {
  //     method:`${isLiked ? 'PUT' : 'DELETE'}`,
  //     headers: this._headers,
  //   }).then(this.checkResponse);
  // }

}



// ↓  конфиг API

const apiConfig = {
  url: "https://api.swearwolfie.movies.nomoreparties.sbs/",
};

const mainApi = new Api(apiConfig);
export default mainApi;