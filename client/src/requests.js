const axios = require('axios');

const getAllCountries = () => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/all',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  return axios(options);
};

const getRegionCountries = (region) => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/region',
    params: { 'region': region },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }

  return axios(options);
};

const searchCountries = (searchString) => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/search',
    params: { 'searchString': searchString },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }

  return axios(options);
};

const getBorders = (searchString) => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/borders',
    params: { 'searchString': searchString },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }

  return axios(options)
}

module.exports = {
  getAllCountries,
  getRegionCountries,
  searchCountries,
  getBorders
}