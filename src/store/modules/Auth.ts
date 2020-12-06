import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import firebase from 'firebase/app';

@Module
export default class Auth extends VuexModule {
  userId: userId = null;

  get getUserId() {
    return this.userId;
  }

  @Mutation
  private _SET_USER_ID(id: userId): void {
    this.userId = id;
  }

  @Action
  public async login({ email, password }: loginParams) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      this.context.commit('_SET_ERROR', e);
      throw e;
    }
  }

  @Action
  public async register({ email, password, name }: registerParams) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await this.context.dispatch('loadUserId');
      await firebase.database().ref(`/users/${this.getUserId}/info`).set({
        bill: 0,
        locale: 'ru-RU',
        name,
      });
    } catch (e) {
      this.context.commit('_SET_ERROR', e);
      throw e;
    }
  }

  @Action
  public async logout() {
    await firebase.auth().signOut();
  }

  @Action
  private async loadUserId() {
    const user = firebase.auth().currentUser;
    this.context.commit('_SET_USER_ID', user?.uid || null);
  }
}

type userId = string | null;
type loginParams = {email: string; password: string};
type registerParams = {email: string; password: string; name: string};
