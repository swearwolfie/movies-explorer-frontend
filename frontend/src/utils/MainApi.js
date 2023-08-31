// plan goes here

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

  // getCards() {
  //   return fetch(`${this._url}${"cards"}`, {
  //     headers: this._headers,
  //   }).then(this.checkResponse);
  // }

  // deleteCard(id) {
  //   return fetch(`${this._url}${"cards/"}${id}`, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //   }).then(this.checkResponse);
  // }

  // addNewCard(name, link) {
  //   return fetch(`${this._url}${"cards"}`, {
  //     method: "POST",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name,
  //       link,
  //     }),
  //   }).then(this.checkResponse);
  // }

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