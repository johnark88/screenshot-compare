import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
const firebase = require('../../fireConfig.js');

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '*',
  //   redirect: '/login'
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    meta: { requiresAuth: true }
  }
  // login, signUp, dashboard,settings,support,contact
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = firebase.auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
