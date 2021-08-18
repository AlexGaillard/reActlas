import React from 'react';

const Search = ({ handleSearch, searchString, resetSearch }) => {

  const reset = () => {
    resetSearch(searchString)
  }

  return(
    <form onSubmit={handleSearch}>
      <input type="text" id ="search" name="search" placeholder="Search for a country...">
      </input>
      {searchString && <button onClick={reset}>clear</button>}
    </form>
  );

};

export default Search;