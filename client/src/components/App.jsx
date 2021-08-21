import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../requests.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamation } from '@fortawesome/free-solid-svg-icons';
import CountryCard from './CountryCard.jsx';
import Nav from './Nav.jsx';
import Search from './Search.jsx';
import Filter from './Filter.jsx';
import CountryDetail from './CountryDetail.jsx';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [filterString, setFilterString] = useState('');
  const [darkMode, setDarkMode] = useState(false);

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
    handleFilterSearch();
  }, [searchString]);

  useEffect(() => {
    handleFilterSearch();
  }, [filterString]);

  const handleFilterSearch = () => {
    const filteredCountries = countries.filter( country => {
      let name = country.name.toLowerCase();
      let region = country.region.toLowerCase();
      if (searchString && filterString) return (name.includes(searchString) && region === filterString)
      else if (searchString && !filterString) return name.includes(searchString)
      else if (!searchString && filterString) return region === filterString
      else return country;
    });
    setDisplayed(filteredCountries);
  };

  return(
    <Router>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div>
        <Switch>
          <Route path="/:id" component={CountryDetail} />
          <Route path="/">
            <div id="filter-search">
              <Search searchString={searchString} setSearchString={setSearchString} />
              <Filter filterString={filterString} setFilterString={setFilterString} />
            </div>
            <div id="countries">
              { (!displayed.length && searchString) ? <div className="not-found"><FontAwesomeIcon icon={faExclamation} /> <p>Country not found</p></div> :
                displayed.length ? displayed.map(country => {
                return  <Link to={{pathname:`/${country.name}`, state: { country }}} key={country.alpha3Code} > <CountryCard key={country.name} countryData={country}/></Link>
              }) : <div className="loader"><FontAwesomeIcon icon={faSpinner} spin /> <p>Loading...</p></div>}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;