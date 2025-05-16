import api from '../api/axios';

export default {
  register(firstname, lastname, email, password) {
    return api.post('/register', {
      firstname,
      lastname,
      email,
      password,
      password_confirmation: password
    });
  },

  login(email, password) {
    return api.post('/login', { email, password });
  },

  logout() {
    return api.post('/logout');
  },

  getUser() {
    return api.get('/user');
  }
};