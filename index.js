const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true })); // allows body to be used in requests

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});

app.post('/createUser', (req, res) => {
  const newHandle = req.body.newhandle;
  const newPassword = req.body.newpassword;
  const url = 'https://chitter-backend-api.herokuapp.com/users';
  const data = { user: { handle: newHandle, password: newPassword } };

  axios.post(url, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  res.send('created new user'); // api request
});

app.post('/login', async (req, res) => {
  const userHandle = req.body.handle;
  const userPassword = req.body.password;
  const url = 'https://chitter-backend-api.herokuapp.com/sessions';
  const data = { session: { handle: userHandle, password: userPassword } };

  axios.post(url, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  res.send('created new user');
});
