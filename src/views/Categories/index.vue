<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card
        class="pa-2"
        outlined
        tile>
          One of three columns
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card
        class="pa-2"
        outlined
        tile>
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ScreenTitle from '@/components/ScreenTitle.vue';

@Component({
  name: 'Categories',
  components: { ScreenTitle },
})

export default class Categories extends Vue {

}
</script>

<style lang="scss">

</style>
