const axios = require('axios');

const getAllCountries = () => {
  let options = {
    method: 'get',
    url: 'http://localhost:3000/all'
  }

  return axios(options);
}

module.exports = {
  getAllCountries
}