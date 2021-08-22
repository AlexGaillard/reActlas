import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ handleFilterSearch, filterString, setFilterString }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const handleClick = (e) => {
    let value = e.target.innerText;
    setFilterString(value.toLowerCase());
    setIsOpen(false);
  };

  const reset = () => {
    setIsOpen(false)
    setFilterString('');
  }

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return(
    <>
      <div className="filter-container" aria-label="Filter by region">

        <div className="filter-header" onClick={toggling}>
          {filterString.charAt(0).toUpperCase() + filterString.slice(1) || "Filter by Region"}
          <FontAwesomeIcon className={filterString && 'filtered'} icon={isOpen ? faChevronUp : faChevronDown} />
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