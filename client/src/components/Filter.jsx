import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return(
    <>
      <div className="drop-down-container">
        <div className="drop-down-header" onClick={toggling}>{selectedOption || "Filter by region..."}{filterString && <FontAwesomeIcon icon={faTimesCircle} onClick={resetFilter} />}</div>
        {isOpen && (
        <div className="drop-down-list-container">
          <ul className="drop-down-list">
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