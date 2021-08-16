const axios = require('axios');

const getAllCountries = () => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/all'
  }

  return axios(options);
}

const getRegionCountries = (region) => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/region',
    params: { 'region': region }
  }

  return axios(options);
}

const searchCountries = (searchString) => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/search',
    params: { 'searchString': searchString }
  }

  return axios(options);
}

module.exports = {
  getAllCountries,
  getRegionCountries,
  searchCountries
}