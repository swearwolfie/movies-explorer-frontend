import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
        <a
          href="https://github.com/swearwolfie"
          class="portfolio__link"
          target="_blank"
          rel="noreferrer"
        > 
          <h3 className="portfolio__description">Статичный сайт</h3>
          <div className="portfolio__pointer"></div>
        </a>
        <a
          href="https://github.com/swearwolfie"
          class="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
         <h3 className="portfolio__description">Адаптивный сайт</h3>
         <div className="portfolio__pointer"></div>
        </a>
        <a
          href="https://github.com/swearwolfie"
          class="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="portfolio__description">Одностраничное приложение</h3>
          <div className="portfolio__pointer"></div>
        </a>
    </section>
  );
}

export default Portfolio;
