import React from 'react';

const Search = ({ searchResults }) => {

  return(
    <form onSubmit={searchResults}>
      <input type="text" id ="search" name="search" placeholder="Search for a country...">
      </input>
    </form>
  );

};

export default Search;