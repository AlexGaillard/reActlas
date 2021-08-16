import React from 'react';

const Filter = () => {

  return(
    <select name="filter-region">
      <option selected disabled hidden>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )

};

export default Filter;