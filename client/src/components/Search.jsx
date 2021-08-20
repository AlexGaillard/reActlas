import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Search = ({ searchString, setSearchString, resetSearch }) => {

  const reset = (e) => {
    resetSearch(searchString);
  };

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  return(
    <>
    <div>
      <form autoComplete="off">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" id ="search" name="search" placeholder="Search for a country..." onChange={handleChange} value={searchString}>
        </input>
        {searchString && <FontAwesomeIcon icon={faTimesCircle} onClick={reset} />}
      </form>
    </div>
    </>
  );

};

export default Search;