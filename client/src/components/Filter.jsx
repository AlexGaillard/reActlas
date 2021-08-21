import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ filterString, setFilterString, resetFilter }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const handleClick = (e) => {
    let value = e.target.innerText;
    setSelectedOption(value);
    setFilterString(value.toLowerCase());
    setIsOpen(false);
  };

  const reset = () => {
    resetFilter();
    setSelectedOption(null);
  }

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return(
    <>
      <div className="filter-container">
        {filterString && <FontAwesomeIcon icon={faTimesCircle} onClick={reset} />}
        <div className="filter-header" onClick={toggling}>{selectedOption || "Filter by region..."}</div>
        {isOpen && (
        <div className="filter-list-container">
          <ul className="filter-list">
          {options.map(option => (
            <li className="list-item" onClick={handleClick} key={Math.random()}>
                {option}
            </li>
          ))}
          </ul>
        </div>
        )}
      </div>
    </>
  );

};

export default Filter;

    {/* <div id="filter">
      {filterString && <FontAwesomeIcon icon={faTimesCircle} onClick={resetFilter} />}
      <select name="filter" onChange={handleChange} value={filterString}>
        <option hidden>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div> */}