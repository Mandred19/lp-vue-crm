/* eslint-disable */
import firebase from 'firebase/app';
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';
import { InterfaceRootState } from '@/store/types';
import { InterfaceInfoState, InterfaceInfo } from '@/store/modules/info/types';

const state: InterfaceInfoState = {
  info: null,
  lastLocale: null,
};

const getters: GetterTree<InterfaceInfoState, InterfaceRootState> = {
  getInfo(state): InterfaceInfo | null {
    return state.info;
  },
  getLastLocale(state) {
    return state.lastLocale;
  },
};

const mutations: MutationTree<InterfaceInfoState> = {
  SET_INFO(state, info: InterfaceInfo | null) {
    state.info = info;
  },
  SET_LAST_LOCALE(state, locale: string | null) {
    state.lastLocale = locale;
  },
};

const actions: ActionTree<InterfaceInfoState, InterfaceRootState> = {
  async loadInfo({ getters, commit }) {
    try {
      const userId = getters.getUserId;
      const info = (await firebase.database().ref(`/users/${userId}/info`).once('value')).val();
      commit('SET_INFO', info);
    } catch (e) {}
  },
  async updateInfo({ getters, commit, dispatch }, payload) {
    try {
      const userId = getters.getUserId;
      const updateData = { ...getters.getInfo, ...payload };
      await firebase.database().ref(`/users/${userId}/info`).update(updateData);
      commit('SET_INFO', updateData);
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
};

export const info: Module<InterfaceInfoState, InterfaceRootState> = { state, getters, mutations, actions };
