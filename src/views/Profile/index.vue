<template>
  <v-container fluid class="app-container">
    <v-row no-gutters>
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

}
</script>

<style lang="scss">

</style>