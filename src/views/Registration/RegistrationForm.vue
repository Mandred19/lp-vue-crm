<template>
  <v-card
  elevation="2"
  class="card register-card"
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
        :error-messages="validateEmailMessage"
        outlined/>

        <v-text-field
        v-model="password"
        :append-icon="isShow ? 'mdi-eye' : 'mdi-eye-off'"
        :type="isShow ? 'text' : 'password'"
        name="password"
        label="Password"
        title="Password"
        :error-messages="validatePasswordMessage"
        hint=""
        outlined
        @click:append="isShow = !isShow"/>

        <v-text-field
        v-model="name"
        type="text"
        label="Name"
        title="Name"
        :error-messages="validateNameMessage"
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
import { Action } from 'vuex-class';
import { validationMixin } from 'vuelidate';
import { email, minLength, required } from 'vuelidate/lib/validators';

@Component({
  name: 'RegistrationForm',
  components: {},
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required, minLength: minLength(3) },
  },
  mixins: [validationMixin],
})

export default class RegistrationForm extends Vue {
  email = '';

  password = '';

  name = '';

  pending = false;

  isShow = false;

  @Action('register') register: any;

  async formHandler() {
    if (this.$v.$invalid) {
      this.$v.$touch();
      return;
    }

    try {
      this.pending = true;
      await this.register({
        email: this.email.trim(),
        password: this.password.trim(),
        name: this.name.trim(),
      });
      await this.$router.push('/');
    } catch (e) {
      console.warn(e);
    } finally {
      this.pending = false;
    }
  }

  get validateNameMessage(): string {
    let str = '';
    if (this.$v.name.$dirty && !this.$v.name.required) {
      str = 'Enter user name';
    } else if (this.$v.name.$dirty && !this.$v.name.minValue) {
      str = `User name length at least ${this.$v.name.$params.minValue.min} symbols`;
    }
    return str;
  }

  get validateEmailMessage(): string {
    let str = '';
    if (this.$v.email.$dirty && !this.$v.email.required) {
      str = 'Enter email';
    } else if (this.$v.email.$dirty && !this.$v.email.email) {
      str = 'Enter a valid email';
    }
    return str;
  }

  get validatePasswordMessage(): string {
    let str = '';
    if (this.$v.password.$dirty && !this.$v.password.required) {
      str = 'Enter password';
    } else if (this.$v.password.$dirty && !this.$v.password.minValue) {
      str = `Password length at least ${this.$v.password.$params.minValue.min} symbols`;
    }
    return str;
  }
}
</script>

<style lang="scss">
  .register-card {
    margin: auto;
  }
</style>
