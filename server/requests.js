const axios = require('axios');

const getAllCountries = () => {
  let options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/all'
  }

  return axios(options);
}

module.exports = {
  getAllCountries
}