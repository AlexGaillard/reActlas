import React from "react";

const FilterList = ({ handleClick }) => {
  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="filter-list-container">
      <ul className="filter-list">
        {options.map((option) => (
          <li className="list-item" onClick={handleClick} key={option}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
