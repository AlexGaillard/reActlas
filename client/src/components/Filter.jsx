import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ filterString, setFilterString, resetFilter }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const handleClick = (e) => {
    let value = e.target.innerText;
    setFilterString(value.toLowerCase());
    setIsOpen(false);
  };

  const reset = () => {
    setIsOpen(false)
    resetFilter();
  }

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return(
    <>
      <div className="filter-container">

        <div className="filter-header" onClick={toggling}>
          {filterString.charAt(0).toUpperCase() + filterString.slice(1) || "Filter by region..."}{isOpen ?
          <FontAwesomeIcon icon={faChevronDown} rotation={180} /> :
          <FontAwesomeIcon icon={faChevronDown} />}
        </div>
        {filterString && <FontAwesomeIcon icon={faTimesCircle} onClick={reset} />}
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