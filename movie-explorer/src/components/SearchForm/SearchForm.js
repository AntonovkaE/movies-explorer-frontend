import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

function SearchForm({ onSubmit, sectionSearchInput = '' }) {

  const [searchInput, setSearchInput] = useState({
    [sectionSearchInput]: localStorage[sectionSearchInput] || '',
  });
  console.log(localStorage[sectionSearchInput])
  const [isShort, setIsShort] = useState(localStorage.isChecked ? Boolean(JSON.parse(localStorage.isChecked)[sectionSearchInput]) : false);
  const handleSubmit = (e) => {
    localStorage.setItem(sectionSearchInput, searchInput[sectionSearchInput])
    e.preventDefault();
    onSubmit(searchInput[sectionSearchInput], isShort);
  };
  const handleChange = (e) => {
    setSearchInput({
      [sectionSearchInput]: e.target.value,
    });
  };
  const isChecked = (isChecked) => {
    setIsShort(isChecked);
  };
  useEffect(() => {
    if (searchInput[sectionSearchInput] !== '') {
      onSubmit(searchInput[sectionSearchInput], isShort);
    }
  }, [isShort]);

  return (
    <section className="section searchForm">
      <form onSubmit={handleSubmit} className="searchForm__form" name="searchForm">
        <input onChange={handleChange} value={searchInput[sectionSearchInput]}
               className="searchForm__input"
               placeholder="Фильм" required></input>
        <Button type="submit" status="search" text="Найти"/>
        <FilterCheckbox onToggle={isChecked} sectionSearchInput={sectionSearchInput}/>
      </form>
    </section>);
}

export default SearchForm;
