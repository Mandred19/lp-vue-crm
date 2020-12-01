<template>
  <v-container fluid class="app-container">
    <v-row class="flex flex-grow-1 align-center justify-start">
      <v-col cols="12">
        <h1>User name</h1>
      </v-col>
    </v-row>

    <Preloader v-if="loading"/>

    <v-row v-else no-gutters>
      <v-col cols="12" sm="4">
        <div>Profile</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'Profile',
  components: {},
})

export default class Profile extends Vue {
  private loading = false;
}
</script>

<style lang="scss">

</style>
