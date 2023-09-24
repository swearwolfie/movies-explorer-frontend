import React, { useState, useCallback } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSearchMovie,
  handleCheckboxOnChange,
  checkboxChecked,
  searchInfo,
  setSearchInfo
}) {
  const [searchFailed, setSearchFailed] = useState("");

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // если инпут пустой, выдаем подсказку
    if (!searchInfo) {
      setSearchFailed("Нужно ввести ключевое слово");
      return;
    }

    // сабмит нажат, загружаем фильмы
    onSearchMovie(searchInfo, checkboxChecked);
  }

  // содержимое инпута
  function handleSearchChange(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // запоминаем содержимое поиска
    setSearchInfo(e.target.value)
  }

  return (
    <section className="search-form" onSubmit={handleSubmit}>
      <form className="search-form__container">
        <input
          type="text"
          className="search-form__input"
          id="search-input"
          name="search"
          placeholder="Фильм"
          value={searchInfo || ""}
          onChange={handleSearchChange}
        />
        <button className="search-form__button" type="submit" >
          Найти
        </button>
      </form>
      <span
        className='search-form__error search-form__error_active'>
        {searchFailed}
      </span>
      <FilterCheckbox
        handleOnChange={handleCheckboxOnChange}
        isChecked={checkboxChecked}
      />
    </section>
  );
}

export default SearchForm;
