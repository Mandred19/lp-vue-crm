import Vue from 'vue';
import firebase from 'firebase/app';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import 'firebase/auth';
import 'firebase/database';

import App from './App.vue';
import Preloader from './components/Preloader.vue';

Vue.component('Preloader', Preloader);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDENzKF8oLWE7Bp5i2bIps9SB3mSfYKUSg',
  authDomain: 'vue-test-crm-47bbc.firebaseapp.com',
  databaseURL: 'https://vue-test-crm-47bbc.firebaseio.com',
  projectId: 'vue-test-crm-47bbc',
  storageBucket: 'vue-test-crm-47bbc.appspot.com',
  messagingSenderId: '282156607592',
  appId: '1:282156607592:web:2ae476beb6856bf5ab73dd',
  measurementId: 'G-77FH4JTGTC',
});

let app: null | Vue = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
