import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSearchMovie,
  searchInfo,
  setSearchInfo,
  checkboxOnChange,
  checkboxChecked,
}) {
  const [searchFailed, setSearchFailed] = useState("");

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    console.log(searchInfo, "call us by our names");
    if (searchInfo) {
      setSearchFailed("");
    } else if (!searchInfo) {
      setSearchFailed("Нужно ввести ключевое слово");
      console.log(searchInfo, "hey babe whats up");
      return;
    }
    onSearchMovie(searchInfo, checkboxChecked);
  }

  // содержимое инпута
  function handleSearchChange(e) {
    // Запрещаем браузеру переходить по адресу формы

    e.preventDefault();
    setSearchInfo(e.target.value);
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
        <button className="search-form__button" type="submit">
          Найти
        </button>
      </form>
      <span
        className={`search-form__error ${
          searchFailed ? "search-form__error_active" : ""
        } `}
      >
        {" "}
        {searchFailed}
      </span>
      <FilterCheckbox
        handleOnChange={checkboxOnChange}
        isChecked={checkboxChecked}
      />
    </section>
  );
}

export default SearchForm;
