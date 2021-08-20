import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ filterString, setFilterString, resetFilter }) => {

  const handleChange = (e) => {
    setFilterString(e.target.value);
  };

  return(
    <>
    <div id="filter">
      {filterString && <FontAwesomeIcon icon={faTimesCircle} onClick={resetFilter} />}
      <select name="filter" onChange={handleChange} value={filterString}>
        <option hidden>Filter by Region</option>
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