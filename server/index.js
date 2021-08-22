const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { getAllCountries, getRegionCountries, searchCountries, getBorders } = require('./requests.js');
const app = express();
const port = 3000;

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://18.118.2.28/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/all', async(req, res) => {
  let response = await getAllCountries();
  res.send(response.data);
})

app.get('/region', async(req, res) => {
  let query = req.query.region;
  let response = await getRegionCountries(query);
  res.send(response.data);
})

app.get('/search', async(req, res) => {
  let query = req.query.searchString;
  try {
    let response = await searchCountries(query);
    res.send(response.data);
  } catch(err) {
    res.status(404);
    res.end();
  }
})

app.get('/borders', async(req, res) => {
  let query = req.query.searchString;
  let response = await getBorders(query);
  res.send(response.data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})