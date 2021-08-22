const axios = require('axios');

const getAllCountries = () => {
  let options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/all'
  }

  return axios(options);
};

const getRegionCountries = (region) => {
  let options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/region',
    params: { 'region': region }
  }

  return axios(options);
};

const searchCountries = (searchString) => {
  let options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/search',
    params: { 'searchString': searchString }
  }

  return axios(options);
};

const getBorders = (searchString) => {
  let options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/borders',
    params: { 'searchString': searchString }
  }

  return axios(options)
}

module.exports = {
  getAllCountries,
  getRegionCountries,
  searchCountries,
  getBorders
}