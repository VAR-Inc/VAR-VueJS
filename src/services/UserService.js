/* eslint-disable linebreak-style */
import axios from 'axios';

const url = 'http://localhost:7500/api/users';

export default {
  async getUsers() {
    const response = await axios
      .get(url);
    return response.data.users;
  },
};
