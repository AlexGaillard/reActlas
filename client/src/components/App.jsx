import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../requests.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CountryCard from './CountryCard.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Filter from './Filter.jsx';
import CountryInfo from './CountryInfo.jsx';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [filterString, setFilterString] = useState('');

  useEffect(() => {
    if (!countries.length) {
      getAllCountries()
      .then(res => {
        setCountries(res.data);
        setDisplayed(res.data);
      });
    };
  }, [countries]);

  useEffect(() => {
     if (searchString) {
      let display = [];
      for (let i = 0; i < displayed.length; i++) {
        if (displayed[i].name.toLowerCase().includes(searchString)) {
          display.push(displayed[i]);
        }
      }
      setDisplayed(display);
    }

    if (!searchString && !filterString) setDisplayed(countries);
    if (!searchString && filterString) {
      let display = [];
      for (let i = 0; i < countries.length; i++) {
        if (countries[i].region.toLowerCase().includes(filterString)) {
          display.push(countries[i]);
        }
      }
      setDisplayed(display);
    }
  }, [searchString]);

  useEffect(() => {
    if (!searchString) {
      let display = [];
      for (let i = 0; i < countries.length; i++) {
        if (countries[i].region.toLowerCase().includes(filterString)) {
          display.push(countries[i]);
        }
      }
      setDisplayed(display);
    }

    if (searchString) {
      let display = [];
      for (let i = 0; i < countries.length; i++) {
        if (countries[i].region.toLowerCase().includes(filterString) && countries[i].name.toLowerCase().includes(searchString)) {
          display.push(countries[i]);
        }
      }
      setDisplayed(display);
    }
  }, [filterString])

  const reset = (str) => {
    if (str === searchString) {
      setSearchString('');
    } else {
      setFilterString('');
    }
  }

  return(
    <Router>
      <Header />
      <div>
        <Switch>

          <Route path="/:id" component={CountryInfo} />

          <Route path="/">
            <div id="filter-search">
              <Search searchString={searchString} setSearchString={setSearchString} resetSearch={reset} />
              <Filter filterString={filterString} setFilterString={setFilterString} resetFilter={reset} />
            </div>
            <div id="countries">
              { displayed.length ? displayed.map(country => {
                return  <Link to={{pathname:`/${country.name}`, state: { country }}} key={country.alpha3Code} > <CountryCard key={country.name} countryData={country}/></Link>
              }) : <p>Loading...</p>}
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );

}

export default App;