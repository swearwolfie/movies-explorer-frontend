import React, { useEffect } from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

const handleGoBack = () => {
  navigate(-1);
};


  return (
    <main className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button onClick={handleGoBack} className="not-found__button">
        Назад
      </button>
    </main>
  );
}

export default NotFound;
