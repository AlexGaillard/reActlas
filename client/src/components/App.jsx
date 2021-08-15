import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../requests.js'

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
    <h1>{ countries.length ? countries[0].name : 'Loading...'}</h1>
  )

}

export default App;