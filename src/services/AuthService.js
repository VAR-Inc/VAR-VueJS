/* eslint-disable linebreak-style */
import axios from 'axios';

const url = 'http://localhost:7500/api';

export default {
  async login(credentials) {
    const response = await axios
      .post(`${url}/auth/login`, credentials);
    return response.data;
  },
  async signup(credentials) {
    const response = await axios
      .post(`${url}/auth/signup`, credentials);
    return response.data;
  },
  async getSecretRoute() {
    const response = await axios
      .get(`${url}/secret`);
    return response.data.message;
  },
};
