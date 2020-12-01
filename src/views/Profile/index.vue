<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <Preloader v-if="loading"/>

    <v-row v-else no-gutters>
      <v-col md="6" sm="12">
        <form @submit.prevent="formHandler" class="mb-4">
          <v-select
          @change="selectHandler($event)"
          :items="categories"
          label="Language"
          title="Language"
          outlined/>

          <v-select
          @change="selectHandler($event)"
          :items="themes"
          label="Theme"
          title="Theme"
          outlined/>

          <v-text-field
          label="Your name"
          title="Your name"
          outlined/>

          <v-text-field
          label="Your bill"
          title="Your bill"
          type="number"
          outlined/>

          <v-btn
          :loading="false"
          :disabled="false"
          type="submit"
          title="Update"
          color="blue-grey"
          class="white--text">
            Update
            <v-icon right>
              mdi-send-outline
            </v-icon>
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ScreenTitle from '@/components/ScreenTitle.vue';

@Component({
  name: 'Profile',
  components: { ScreenTitle },
})

export default class Profile extends Vue {
  private loading = false;

  private categories = ['Foo', 'Bar'];

  private themes = ['Foo', 'Bar'];

  formHandler(): void {
    console.warn(111);
  }

  selectHandler(val: string): void {
    console.warn(val);
  }
}
</script>

<style lang="scss">

</style>
