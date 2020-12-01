<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <Preloader v-if="loading"/>

    <v-row v-else>
      <v-col cols="12" md="6">
        <CategoriesCreate/>
      </v-col>

      <v-col cols="12" md="6">
        <CategoriesEdit/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ScreenTitle from '@/components/ScreenTitle.vue';
import CategoriesCreate from '@/views/Categories/CategoriesCreate.vue';
import CategoriesEdit from '@/views/Categories/CategoriesEdit.vue';

@Component({
  name: 'Categories',
  components: { ScreenTitle, CategoriesCreate, CategoriesEdit },
})

export default class Categories extends Vue {
  private loading = false;
}
</script>

<style lang="scss">

</style>
