import React from 'react';

const Search = () => {

  const handleSubmit = () => {
    alert('hi')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" id ="country-search" name="country-search" placeholder="Search for a country...">
      </input>
    </form>
  )

};

export default Search;