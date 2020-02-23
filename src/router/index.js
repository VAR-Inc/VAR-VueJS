import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Support from '../views/Support.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Assistants from '../views/Assistants.vue';
import User from '../views/User.vue';
import NotFound from '../views/NotFound.vue';
import Credits from '../views/Credits.vue';
import About from '../views/About.vue';

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
    props: true,
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
    name: 'user',
    path: '/users/:id',
    component: User,
    props: true,
  },
  {
    path: '/credits',
    name: 'credits-page',
    component: Credits,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '*',
    name: 'error-404',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
