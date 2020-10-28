import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import(/* webpackChunkName: "start" */ '../views/Start.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/password-forgotten',
    name: 'PasswordForgotten',
    component: () => import(/* webpackChunkName: "passwordForgotten" */ '../views/PasswordForgotten.vue'),
  },
  {
    path: '/password-reset',
    name: 'PasswordForgottenSuccess',
    component: () => import(/* webpackChunkName: "passwordForgottenSuccess" */'../views/PasswordForgottenSuccess.vue'),
  },
  {
    path: '/register',
    name: 'RegisterAccount',
    component: () => import(/* webpackChunkName: "registerAccount" */ '../views/RegisterAccount.vue'),
  },
  {
    path: '/register-success',
    name: 'RegisterAccountSuccess',
    component: () => import(/* webpackChunkName: "registerAccountSuccess" */ '../views/RegisterAccountSuccess.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
  },
  {
    path: '/events/1',
    name: 'Event',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event.vue'),
  },
  {
    path: '/events/1/admin',
    name: 'EventAdmin',
    component: () => import(/* webpackChunkName: "eventAdmin" */ '../views/EventAdmin.vue'),
  },
  {
    path: '/events/1/register',
    name: 'RegisterAthlete',
    component: () => import(/* webpackChunkName: "registerAthlete" */ '../views/RegisterAthlete.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
