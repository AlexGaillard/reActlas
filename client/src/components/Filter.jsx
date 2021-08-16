import React from 'react';

const Filter = ({filterResults}) => {

  return(
    <select name="filter" onChange={filterResults}>
      <option selected disabled hidden>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );

};

export default Filter;