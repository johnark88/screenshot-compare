import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/main.css';
const firebase = require('../fireConfig.js');

Vue.config.productionTip = false;

firebase.auth.onAuthStateChanged(user => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
});
