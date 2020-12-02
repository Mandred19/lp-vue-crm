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

        <v-text-field
        type="text"
        label="Name"
        title="Name"
        outlined/>

        <v-btn
        :loading="false"
        :disabled="false"
        block
        type="submit"
        title="Register"
        color="blue-grey"
        class="white--text">
          Register
          <v-icon right>
            mdi-send-outline
          </v-icon>
        </v-btn>
      </form>
    </v-card-text>

    <v-card-text>
      <div class="d-flex align-center flex-row flex-nowrap">
        <span class="text--black font-weight-bold mr-4">Do you have an account?</span>

        <v-btn
        title="Login"
        color="blue-grey"
        text
        to="/login"
        class="white--text">
          Login
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'RegistrationForm',
  components: {},
})

export default class RegistrationForm extends Vue {
  private password = '';

  private isShow = false;

  formHandler(): void {
    console.warn(111);
  }
}
</script>

<style lang="scss">

</style>
