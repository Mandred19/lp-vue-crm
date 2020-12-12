<template>
  <v-row no-gutters>
    <v-col cols="12">
      <h3 class="mb-4">Edit category</h3>

      <form @submit.prevent="formHandler" class="mb-4">
        <v-select
        @change="selectHandler($event)"
        :items="categoriesList"
        :value="currentCategory"
        label="Categories"
        title="Categories"
        outlined/>

        <v-text-field
        v-model="categoryName"
        label="Category name"
        title="Category name"
        type="text"
        outlined/>

        <v-text-field
        v-model="categoryLimit"
        label="Category limit"
        title="Category limit"
        type="number"
        outlined/>

        <v-btn
        :loading="false"
        :disabled="false"
        type="submit"
        title="Update category"
        color="blue-grey"
        class="white--text">
          Update category
          <v-icon right>
            mdi-send-outline
          </v-icon>
        </v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { InterfaceCategory } from '@/store/modules/category/types';

@Component({
  name: 'CategoriesEdit',
  components: {},
})

export default class CategoriesEdit extends Vue {
  currentCategory: currentCategoryType = { text: '', value: '' };

  categoryName = '';

  categoryLimit = 0;

  @Getter('getCategories') categories: any;

  @Action('updateCategory') updateCategory: any;

  get categoriesList(): currentCategoryType[] {
    return this.categories.map((item: InterfaceCategory) => ({
      text: item.name,
      value: item.id,
    }));
  }

  async formHandler() {
    try {
      await this.updateCategory({
        id: this.currentCategory.value,
        name: this.categoryName,
        limit: this.categoryLimit,
      });
      await this.$emit('updateCategoriesList');
    } catch (e) {}
  }

  selectHandler(val: string): void {
    const { name, limit } = this.categories.find((item: InterfaceCategory) => item.id === val);
    this.currentCategory = this.categoriesList.find((item: currentCategoryType) => item.value === val) || this.currentCategory;
    this.categoryName = name;
    this.categoryLimit = limit;
  }
}

type currentCategoryType = { text: string; value: string };
</script>

<style lang="scss">

</style>
