import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({ handleSearch, searchString, resetSearch }) => {

  const reset = () => {
    resetSearch(searchString)
  }

  return(
    <>
    <div>
    <form onSubmit={handleSearch} autocomplete="off">
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" id ="search" name="search" placeholder="Search for a country...">
      </input>
    </form>
    </div>
    {searchString && <button onClick={reset}>clear</button>}
    </>
  );

};

export default Search;