/* eslint-disable */
import firebase from 'firebase/app';
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';
import { InterfaceRootState } from '@/store/types';
import { InterfaceCategory, InterfaceCategoryState } from '@/store/modules/category/types';

const state: InterfaceCategoryState = {
  categories: null,
  category: null,
};

const getters: GetterTree<InterfaceCategoryState, InterfaceRootState> = {
  getCategories(state): InterfaceCategory[] | null {
    return state.categories;
  },
  getCategory(state): InterfaceCategory | null {
    return state.category;
  },
};

const mutations: MutationTree<InterfaceCategoryState  > = {
  SET_CATEGORIES(state, categories: InterfaceCategory[] | null) {
    state.categories = categories;
  },
  SET_CATEGORY(state, category: InterfaceCategory | null) {
    state.category = category;
  },
};

const actions: ActionTree<InterfaceCategoryState, InterfaceRootState> = {
  async createCategory({ getters, commit, dispatch }, { name, limit }: { limit: number; name: string }) {
    try {
      const userId = getters.getUserId;
      await firebase.database().ref(`users/${userId}/categories`).push({ name, limit });
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
  async updateCategory({ getters, commit, dispatch }, { id, name, limit }: InterfaceCategory) {
    try {
      const userId = getters.getUserId;
      await firebase.database().ref(`users/${userId}/categories`).child(id).update({ name, limit });
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
  async loadCategories({ getters, commit }) {
    try {
      const userId = getters.getUserId;
      const categories = (await firebase.database().ref(`users/${userId}/categories`).once('value')).val() || {};
      commit('SET_CATEGORIES', Object.keys(categories).map((key) => ({ ...categories[key], id: key })));
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
  async loadCategoryById({ getters, commit, dispatch }, id: string) {
    try {
      const userId = getters.getUserId;
      const category = (await firebase.database().ref(`users/${userId}/categories`).child(id).once('value')).val() || {};
      commit('SET_CATEGORY', { ...category, id });
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
};

export const category: Module<InterfaceCategoryState, InterfaceRootState> = { state, getters, mutations, actions };
