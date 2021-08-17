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
    <Router>
      <div>
        <Header />
        <Switch>

          <Route path="/:id" component={CountryInfo} />

          <Route path="/">
            <div id="filter-search">
              <Search searchResults={searchResults} />
              <Filter filterResults={filterResults} />
            </div>
            <div id="countries">
              { countries.length ? countries.map((country, index) => {

                let borders = [country];

                for (let i = 0; i < country.borders.length; i++) {
                  let targetBorder = country.borders[i];
                  for (let j = 0; j < countries.length; j++) {
                    if (countries[j].alpha3Code === targetBorder) borders.push(countries[j]);
                  }
                };

                return  <Link to={{pathname:`/${country.name}`, state: {country, borders}}} > <CountryCard key={country.name} countryData={country}/></Link>
              }) : <p>Loading...</p>}
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );

}

export default App;