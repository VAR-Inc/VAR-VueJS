import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import UserService from '../services/UserService';
import AuthService from '../services/AuthService';

Vue.use(Vuex);

const getDefaultState = () => ({
  isLoggedIn: false,
  token: '',
  user: { username: '' },
  users: [],
});

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    token: (state) => state.token,
    getUsername: (state) => state.user.username,
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
    userFromId: (state) => (id) => state.users.find((user) => user.id === id),
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_IS_LOGGED_IN: (state, isLoggedIn) => {
      state.isLoggedIn = isLoggedIn;
    },
    LOGOUT: (state) => {
      Object.assign(state, getDefaultState());
      localStorage.clear();
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    signup: ({ commit }, credentials) => {
      AuthService.signup(credentials).then((result) => {
        const { token, user, isLoggedIn } = result;
        commit('SET_IS_LOGGED_IN', isLoggedIn);
        commit('SET_TOKEN', token);
        commit('SET_USER', user);
      });
    },
    login: ({ commit }, credentials) => {
      AuthService.login(credentials).then((result) => {
        const { token, user, isLoggedIn } = result;
        commit('SET_IS_LOGGED_IN', isLoggedIn);
        commit('SET_TOKEN', token);
        commit('SET_USER', user);
      });
    },
    logout: ({ commit }) => {
      commit('LOGOUT');
    },
    persistSession: ({ commit }) => {
      const existingState = JSON.parse(localStorage.getItem('vuex'));
      if (existingState) {
        commit('SET_TOKEN', existingState.token);
        commit('SET_USER', existingState.user);
        commit('SET_IS_LOGGED_IN', existingState.isLoggedIn);
        commit('SET_USERS', existingState.users);
      }
    },
    fetchUsers: ({ commit }) => {
      UserService
        .getUsers()
        .then((users) => {
          commit('SET_USERS', users);
        });
    },
  },
  modules: {
  },
});
