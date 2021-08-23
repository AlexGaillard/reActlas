import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../requests.js';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Nav from './Nav.jsx';
import CountryDetails from './CountryDetails.jsx';
import Search from './Search.jsx';
import Filter from './Filter.jsx';

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
      if (searchString && filterString) return (name.includes(searchString.toLowerCase()) && region === filterString)
      else if (searchString && !filterString) return name.includes(searchString.toLowerCase())
      else if (!searchString && filterString) return region === filterString
      else return country;
    });
    setDisplayed(filteredCountries);
  };

  return(
    <>
      <Nav darkMode={ darkMode } setDarkMode={ setDarkMode } />
      <div id="container">
        <Switch>
          <Route path="/:id" component={ CountryDetails } />
          <Route path="/" >
            <div id="filter-search">
              <Search searchString={ searchString } setSearchString={ setSearchString } />
              <Filter filterString={ filterString } setFilterString={ setFilterString } />
            </div>
            <Homepage displayed={ displayed } searchString={ searchString } />
          </Route>
        </Switch>
      </div>
    </>
  );

};

export default App;