import React from 'react';
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="section section_searchForm">
      <form name="searchForm">
        <input className="searchForm__input" placeholder="Фильм"></input>
        <button className="button button_submit button_search" type="submit">Найти</button>
        <FilterCheckbox/>
      </form>
    </section>)
}

export default SearchForm;
