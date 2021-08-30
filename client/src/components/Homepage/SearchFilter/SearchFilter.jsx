import React, { useEffect } from "react";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";

const SearchFilter = ({
  searchString,
  setSearchString,
  filterString,
  setFilterString,
  countries,
  setDisplayed,
}) => {
  useEffect(() => {
    handleFilterSearch();
  }, [searchString, filterString]);

  const handleFilterSearch = () => {
    const filteredCountries = countries.filter((country) => {
      let name = country.name.toLowerCase();
      let region = country.region.toLowerCase();
      if (searchString && filterString)
        return (
          name.includes(searchString.toLowerCase()) && region === filterString
        );
      else if (searchString && !filterString)
        return name.includes(searchString.toLowerCase());
      else if (!searchString && filterString) return region === filterString;
      else return country;
    });
    setDisplayed(filteredCountries);
  };

  return (
    <div id="search-filter">
      <Search searchString={searchString} setSearchString={setSearchString} />
      <Filter filterString={filterString} setFilterString={setFilterString} />
    </div>
  );
};

export default SearchFilter;
