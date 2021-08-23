import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FilterList from './FilterList.jsx';

const Filter = ({ filterString, setFilterString }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const handleClick = (e) => {
    let value = e.target.innerText;
    setFilterString(value.toLowerCase());
    setIsOpen(false);
  };

  const reset = () => {
    setFilterString('');
  };

  return(
    <div className="filter-container" aria-label="Filter by region">
      <div className="filter-header" onClick={ toggling }>
        { filterString.charAt(0).toUpperCase() + filterString.slice(1) || "Filter by Region" }
        <FontAwesomeIcon className={ filterString && 'filtered' } icon={ isOpen ? faChevronUp : faChevronDown } />
      </div>
      { filterString && <FontAwesomeIcon icon={ faTimesCircle } onClick={ reset } /> }
      { isOpen && <FilterList handleClick={ handleClick } /> }
    </div>
  );

};

export default Filter;