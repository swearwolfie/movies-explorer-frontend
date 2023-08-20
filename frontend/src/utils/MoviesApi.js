// thingie for the beatfilm interaction help us god

class moviesApi {
  constructor({ url, headers }) {
    this._url = url; // https://api.nomoreparties.co/beatfilm-movies
    this._headers = headers;
  }

  // ↓ отдельная функция для общения с сервером
  checkResponse(response) {
    if (response.ok) {
      return response.json(); // Promise.resolve
    } else {
      Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
    }
  }
  // `${this._url}` //
  // ↓ получаем вообще все фильмы
  getAllMovies() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then(this.checkResponse);
  }
}

// ↓  конфиг API
const apiConfig = {
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-type": "application/json",
  },
};

const getMoviesApi = new moviesApi(apiConfig);
export default getMoviesApi;