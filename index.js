const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const apiHandler = require('./handlers/chitterBackendHandler');

app.use(bodyParser.urlencoded({ extended: true })); // allows body to be used in requests

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});

app.post('/createUser', async (req, res) => {
  const result = await apiHandler.chitterSignup(req.body);
  res.send(result.data);
});

app.post('/login', async (req, res) => {
  const result = await apiHandler.chitterLogin(req.body);
  res.send(result.data);
});
