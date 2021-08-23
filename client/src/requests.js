const axios = require('axios');

const getAllCountries = () => {
  let options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/all'
  }

  return axios(options);
};

const getBorders = (searchString) => {
  let options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/alpha',
    params: { 'codes': searchString }
  }

  return axios(options)
}

module.exports = {
  getAllCountries,
  getBorders
}