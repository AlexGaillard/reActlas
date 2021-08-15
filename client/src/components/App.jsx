import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../requests.js'
import CountryCard from './CountryCard.jsx'

const App = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!countries.length) {
      getAllCountries()
      .then(res => {
        setCountries(res.data);
      })
    }
  });

  return(
    <div id="countries">
      { countries.length ? countries.map(country => {
        return <CountryCard key={country.name} countryData={country}/>
      }) : <p>Loading...</p>}
    </div>
  )

}

export default App;