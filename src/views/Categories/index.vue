<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <Preloader v-if="loading"/>

    <v-row v-else>
      <v-col cols="12" md="6">
        <CategoriesCreate @updateCategoriesList="updateCategoriesList"/>
      </v-col>

      <v-col v-if="!loading && categories.length > 0" cols="12" md="6">
        <CategoriesEdit @updateCategoriesList="updateCategoriesList"/>
      </v-col>

      <v-col v-else cols="12" md="6">
        No categories
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import ScreenTitle from '@/components/ScreenTitle.vue';
import CategoriesCreate from '@/views/Categories/CategoriesCreate.vue';
import CategoriesEdit from '@/views/Categories/CategoriesEdit.vue';

@Component({
  name: 'Categories',
  components: { ScreenTitle, CategoriesCreate, CategoriesEdit },
})

export default class Categories extends Vue {
  private loading = true;

  @Getter('getCategories') categories: any;

  @Action('loadCategories') loadCategories: any;

  async created() {
    await this.updateCategoriesList();
  }

  private async updateCategoriesList() {
    this.loading = true;
    await this.loadCategories();
    this.loading = false;
  }
}
</script>

<style lang="scss">

</style>
