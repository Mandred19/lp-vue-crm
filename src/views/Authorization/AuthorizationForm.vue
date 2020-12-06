<template>
  <v-card
  elevation="2"
  class="card auth-card"
  max-width="400"
  min-width="320"
  outlined>
    <v-card-title>CRM</v-card-title>

    <v-card-text>
      <form @submit.prevent="formHandler">
        <v-text-field
        v-model="email"
        type="email"
        label="Email"
        title="Email"
        outlined/>

        <v-text-field
        v-model="password"
        :append-icon="isShow ? 'mdi-eye' : 'mdi-eye-off'"
        :type="isShow ? 'text' : 'password'"
        name="password"
        label="Password"
        title="Password"
        hint=""
        outlined
        @click:append="isShow = !isShow"/>

        <v-btn
        :loading="false"
        :disabled="false"
        block
        type="submit"
        title="Login"
        color="blue-grey"
        class="white--text">
          Login
          <v-icon right>
            mdi-send-outline
          </v-icon>
        </v-btn>
      </form>
    </v-card-text>

    <v-card-text>
      <div class="d-flex align-center flex-row flex-nowrap">
        <span class="text--black font-weight-bold mr-4">Do not have an account?</span>

        <v-btn
        title="Register"
        color="blue-grey"
        text
        to="/register"
        class="white--text">
          Register
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({
  name: 'AuthorizationForm',
  components: {},
})

export default class AuthorizationForm extends Vue {
  private email = '';

  private password = '';

  private isShow = false;

  private pending = false;

  @Action login: any;

  async formHandler() {
    try {
      this.pending = true;
      await this.login({
        email: this.email.trim(),
        password: this.password.trim(),
      });
      await this.$router.push('/');
    } catch (e) {
      console.warn(e);
    } finally {
      this.pending = false;
    }
  }
}
</script>

<style lang="scss">
  .auth-card {
    margin: auto;
  }
</style>
