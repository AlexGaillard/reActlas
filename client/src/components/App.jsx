import React, { useState, useEffect } from 'react';
import { getAllCountries, getRegionCountries, searchCountries } from '../requests.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CountryCard from './CountryCard.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Filter from './Filter.jsx';
import CountryInfo from './CountryInfo.jsx';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState(false);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    if (!countries.length) {
      getAllCountries()
      .then(res => {
        setCountries(res.data);
      });
    };
  });

  const reset = () => {
    getAllCountries()
      .then(res => {
        setCountries(res.data);
        setSearched(false);
        setFiltered(false);
    });
  }

  const filterResults = (e) => {
    getRegionCountries(e.target.value)
    .then(res => {
      setCountries(res.data);
      setFiltered(true);
     });
  };

  const searchResults = (e) => {
    e.preventDefault();
    searchCountries(e.target.search.value)
    .then(res => {
      console.log(res)
      setCountries(res.data);
      setSearched(true);
     })
    .catch(err => {
      alert('Sorry that country does\'nt exist')
    });
  };

  return(
    <Router>
      <div>
        <Header />
        <Switch>

          <Route path="/:id" component={CountryInfo} />

          <Route path="/">
            <div id="filter-search">
              <Search searchResults={searchResults} searched={searched} resetSearch={reset} />
              <Filter filterResults={filterResults} filtered={filtered} resetFilter={reset} />
            </div>
            <div id="countries">
              { countries.length ? countries.map(country => {
                return  <Link to={{pathname:`/${country.name}`, state: { country }}} > <CountryCard key={country.name} countryData={country}/></Link>
              }) : <p>Loading...</p>}
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );

}

export default App;