const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const { getAllCountries } = require('./requests.js');
const app = express();
const port = 3000;

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/all', async(req, res) => {

  const options = {
    method: 'get',
    url: 'https://restcountries.eu/rest/v2/all'
  }

  let response = await axios(options);
  res.send(response.data);
})

app.get('/region', async(req, res) => {

  let query = req.query.region;

  const options = {
    method: 'get',
    url: `https://restcountries.eu/rest/v2/region/${query}`
  }

  let response = await axios(options);
  res.send(response.data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})