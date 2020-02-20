
import Vue from 'vue';
import Axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Axios.defaults.headers.common.Authorization = `Bearer ${store.state.token}`;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
