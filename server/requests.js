const axios = require('axios');

const getAllCountries = () => {

  const options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/all'
  };

  return axios(options);
};

const getRegionCountries = (region) => {

  const options = {
    method: 'get',
    url: `https://restcountries.eu/rest/v2/region/${region}`
  }

  return axios(options);
};

const searchCountries = (searchString) => {

  const options = {
    method: 'get',
    url: `https://restcountries.eu/rest/v2/name/${searchString}`
  }

  return axios(options);
};

const getBorders = (searchString) => {

  const options = {
    method: 'get',
    url: `https://restcountries.eu/rest/v2/alpha?codes=${searchString}`
  }

  return axios(options);
};

module.exports = {
  getAllCountries,
  getRegionCountries,
  searchCountries,
  getBorders
}