const axios = require('axios');

const chitterSignup = async (body) => {
  const newHandle = body.newhandle;
  const newPassword = body.newpassword;
  const url = 'https://chitter-backend-api.herokuapp.com/users';
  const data = { user: { handle: newHandle, password: newPassword } };

  return axios.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

const chitterLogin = async (body) => {
  const userHandle = body.handle;
  const userPassword = body.password;
  const url = 'https://chitter-backend-api.herokuapp.com/sessions';
  const data = { session: { handle: userHandle, password: userPassword } };

  return axios.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

module.exports = {
  chitterSignup,
  chitterLogin,
};
