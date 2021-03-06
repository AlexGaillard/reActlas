const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static('client/public'));
app.use(express.static('client/dist'));

app.get('/*', (req, res) => {
  res.redirect('/')
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://18.118.2.28");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log(`reActlas app listening at http://localhost:${port}`)
})