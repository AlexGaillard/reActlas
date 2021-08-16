import React, { useState, useEffect } from 'react';
import { getAllCountries, getRegionCountries } from '../requests.js';
import CountryCard from './CountryCard.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Filter from './Filter.jsx';

const App = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!countries.length) {
      getAllCountries()
      .then(res => {
        setCountries(res.data);
      });
    };
  });

  const filterResults = (e) => {
    getRegionCountries(e.target.value)
    .then(res => {
      setCountries(res.data);
     });
  };

  return(
    <div>
      <Header />
      <div id="filter-search">
        <Search />
        <Filter filterResults={filterResults}/>
      </div>
      <div id="countries">
        { countries.length ? countries.map(country => {
          return <CountryCard key={country.name} countryData={country}/>
        }) : <p>Loading...</p>}
      </div>
    </div>
  );

}

export default App;