const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static('client/public'));
app.use(express.static('client/dist'));

app.get('/*', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`reActlas app listening at http://localhost:${port}`)
})