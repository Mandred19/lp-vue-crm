import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '@/store/modules/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
  },
  state: {
    error: null,
  },
  getters: {
    getError(state) {
      return state.error;
    },
  },
  mutations: {
    _SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
  },
});
