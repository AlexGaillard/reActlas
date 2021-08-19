import React from 'react';

const Filter = ({ handleFilter, filterString, resetFilter }) => {

  return(
    <>
    {filterString && <button onClick={resetFilter}>clear</button>}
    <div id="filter">
    <select name="filter" onChange={handleFilter}>
      <option selected disabled hidden>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
    </div>
    </>
  );

};

export default Filter;