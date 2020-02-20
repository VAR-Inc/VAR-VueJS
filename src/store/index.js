import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const getDefaultState = () => ({
  isLoggedIn: false,
  token: '',
  username: '',
  userProfile: {},
});

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    token: (state) => state.token,
    getUsername: (state) => state.username,
    getProfile: (state) => state.userProfile,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_PROFILE: (state, userProfile) => {
      state.userProfile = userProfile;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ISLOGGEDIN: (state, isLoggedIn) => {
      state.isLoggedIn = isLoggedIn;
    },
    LOGOUT: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    login: ({ commit, dispatch }, {
      isLoggedIn, token, username, userProfile,
    }) => {
      commit('SET_ISLOGGEDIN', isLoggedIn);
      commit('SET_TOKEN', token);
      commit('SET_USERNAME', username);
      commit('SET_PROFILE', { ...userProfile });
    },
    logout: ({ commit }) => {
      commit('RESET', '');
    },
  },
  modules: {
  },
});
