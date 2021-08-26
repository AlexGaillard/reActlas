import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Search = ({ handleFilterSearch, searchString, setSearchString }) => {
  const reset = () => {
    setSearchString("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <div className="search-container">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        aria-label="Search Country by name..."
      >
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={searchString}
        />
        {searchString && (
          <FontAwesomeIcon icon={faTimesCircle} onClick={reset} />
        )}
      </form>
    </div>
  );
};

export default Search;
