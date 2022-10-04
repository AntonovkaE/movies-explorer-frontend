import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

function SearchForm({onSubmit}) {
  const [searchInput, setSearchInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchInput)
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  return (
    <section className="section searchForm">
      <form onSubmit={handleSubmit} className="searchForm__form" name="searchForm">
        <input onChange={handleChange} value={searchInput} className="searchForm__input" placeholder="Фильм"></input>
        <Button type="submit" status="search" text="Найти"/>
        {/*<button className="button button_submit button_search" type="submit">Найти</button>*/}
        <FilterCheckbox/>
      </form>
    </section>);
}

export default SearchForm;
