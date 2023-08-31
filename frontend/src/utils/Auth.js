
  const basicURL = "https://api.swearwolfie.movies.nomoreparties.sbs";

  // отдельная функция для общения с сервером
  function checkResponse(response) {
    if (response.ok) {
      return response.json(); // Promise.resolve
    } else {
      return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
    }
  }

  export const createUser = (name, email, password) => {
    return fetch(`https://api.swearwolfie.movies.nomoreparties.sbs/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    }).then(checkResponse);
  }

  export const authorize = (email, password) => {
    return fetch(`${basicURL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }),
    }).then(checkResponse);
  }

  export const checkToken = (token) => {
    // console.log(token, 'come away come away death')
    return fetch(`${basicURL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
    }).then(checkResponse);
  }