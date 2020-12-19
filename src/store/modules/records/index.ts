/* eslint-disable */
import firebase from 'firebase/app';
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';
import { InterfaceRootState } from '@/store/types';
import { InterfaceRecordsState, InterfaceRecord } from '@/store/modules/records/types';

const state: InterfaceRecordsState = {
  record: null,
  records: null,
};

const getters: GetterTree<InterfaceRecordsState, InterfaceRootState> = {
  getRecords(state): InterfaceRecord[] | null {
    return state.records;
  },
  getRecord(state): InterfaceRecord | null {
    return state.record;
  },
};

const mutations: MutationTree<InterfaceRecordsState> = {
  SET_RECORDS(state, records: InterfaceRecord[] | null) {
    state.records = records;
  },
  SET_RECORD(state, record: InterfaceRecord | null) {
    state.record = record;
  },
};

const actions: ActionTree<InterfaceRecordsState, InterfaceRootState> = {
  async createRecord({ getters, commit, dispatch }, payload) {
    try {
      const userId = getters.getUserId;
      await firebase.database().ref(`users/${userId}/records`).push({ ...payload });
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
  async loadRecords({ getters, commit }) {
    try {
      const userId = getters.getUserId;
      const records = (await firebase.database().ref(`users/${userId}/records`).once('value')).val() || {};
      commit('SET_RECORDS', Object.keys(records).map((key) => ({ ...records[key], id: key })));
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
  async loadRecordById({ getters, commit, dispatch }, id: string) {
    try {
      const userId = getters.getUserId;
      const record = (await firebase.database().ref(`users/${userId}/records`).child(id).once('value')).val() || {};
      commit('SET_RECORD', { ...record });
    } catch (e) {
      commit('SET_ERROR', e);
      throw e;
    }
  },
};

export const records: Module<InterfaceRecordsState, InterfaceRootState> = { state, getters, mutations, actions };
