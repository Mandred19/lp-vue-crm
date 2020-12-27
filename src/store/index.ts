import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import firebase from 'firebase';
import { InterfaceRootState } from '@/store/types';
import { auth } from '@/store/modules/auth/index';
import { category } from '@/store/modules/category/index';
import { records } from '@/store/modules/records/index';
import { info } from '@/store/modules/info/index';

Vue.use(Vuex);

const store: StoreOptions<InterfaceRootState> = {
  state: {
    userId: null,
    error: null,
  },
  modules: {
    auth, category, records, info,
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getError(state) {
      return state.error;
    },
  },
  mutations: {
    _SET_USER_ID(state, id) {
      state.userId = id;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async loadUserId({ commit }) {
      const user = firebase.auth().currentUser;
      commit('_SET_USER_ID', user?.uid || null);
    },
    async initApp({ commit, dispatch }) {
      try {
        await dispatch('loadUserId');
        await dispatch('loadInfo');
      } catch (e) {
        commit('SET_ERROR', e);
        throw e;
      }
    },
  },
};

export default new Vuex.Store<InterfaceRootState>(store);
