import React, { useState, useEffect } from 'react';
import { getAllCountries, getRegionCountries, searchCountries } from '../requests.js';
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

  const searchResults = (e) => {
    e.preventDefault();
    searchCountries(e.target.search.value)
    .then(res => {
      console.log(res)
      setCountries(res.data);
     })
    .catch(err => {
      alert('Sorry that country does\'nt exist')
    });
  };

  return(
    <div>
      <Header />
      <div id="filter-search">
        <Search searchResults={searchResults} />
        <Filter filterResults={filterResults} />
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