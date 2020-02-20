import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Support from '../views/Support.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Assistants from '../views/Assistants.vue';
import User from '../views/User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: Home,
  },
  {
    path: '/signup',
    name: 'signup-page',
    component: Signup,
  },
  {
    path: '/login',
    name: 'login-page',
    component: Login,
  },
  {
    path: '/profile',
    name: 'my-profile-page',
    component: Profile,
  },
  {
    path: '/support',
    name: 'support-page',
    component: Support,
  },
  {
    path: '/assistants',
    name: 'assistants-page',
    component: Assistants,
  },
  {
    path: '/user',
    name: 'user-page',
    component: User,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
