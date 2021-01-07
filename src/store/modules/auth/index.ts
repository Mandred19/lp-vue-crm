/* eslint-disable */
import firebase from 'firebase/app';
import {
  ActionTree,
  Module,
} from 'vuex';
import { InterfaceRootState } from '@/store/types';
import { InterfaceAuthState } from '@/store/modules/auth/types';

const state: InterfaceAuthState = {}

const actions: ActionTree<InterfaceAuthState, InterfaceRootState> = {
  async login({ commit, dispatch }, { email, password }: {email: string; password: string}) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      await dispatch('initApp');
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
  async register({ getters, commit, dispatch }, { email, password, name }: {email: string; password: string; name: string}) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await dispatch('loadUserId');
      await firebase.database().ref(`/users/${getters.getUserId}/info`).set({
        bill: 0,
        locale: 'ru-RU',
        name,
      });
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
  async logout({ commit }) {
    await firebase.auth().signOut();
    commit('SET_USER_ID', null);
  },
};

export const auth: Module<InterfaceAuthState, InterfaceRootState> = { state, actions };
