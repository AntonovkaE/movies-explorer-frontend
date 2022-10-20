import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

function SearchForm({onSubmit}) {

  const [searchInput, setSearchInput] = useState(localStorage.searchInput || '')
  const [isShort, setIsShort] = useState(localStorage.isChecked || false)
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchInput, isShort);
  }
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const isChecked = (isChecked) => {
    setIsShort(isChecked)
  }
  useEffect(() => {
    onSubmit(searchInput, isShort)
  }, [isShort])

  return (
    <section className="section searchForm">
      <form onSubmit={handleSubmit} className="searchForm__form" name="searchForm">
        <input onChange={handleChange} value={searchInput} className="searchForm__input" placeholder="Фильм" required></input>
        <Button type="submit" status="search" text="Найти"/>
        <FilterCheckbox onToggle={isChecked}/>
      </form>
    </section>);
}

export default SearchForm;
