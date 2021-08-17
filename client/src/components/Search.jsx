import React from 'react';

const Search = ({ searchResults, searched, resetSearch }) => {

  return(
    <form onSubmit={searchResults}>
      <input type="text" id ="search" name="search" placeholder="Search for a country...">
      </input>
      {searched && <button onClick={resetSearch}>clear</button>}
    </form>
  );

};

export default Search;