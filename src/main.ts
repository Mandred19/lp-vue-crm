import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';

import App from './App.vue';
import Preloader from './components/Preloader.vue';

Vue.component('Preloader', Preloader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
