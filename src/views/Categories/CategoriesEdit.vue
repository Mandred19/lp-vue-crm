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
        :error-messages="validateCurrentCategoryMessage"
        outlined/>

        <v-text-field
        v-model="categoryName"
        label="Category name"
        title="Category name"
        type="text"
        :error-messages="validateCategoryNameMessage"
        outlined/>

        <v-text-field
        v-model="categoryLimit"
        label="Category limit"
        title="Category limit"
        type="number"
        :error-messages="validateCategoryLimitMessage"
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
import { validationMixin } from 'vuelidate';
import { minLength, minValue, required } from 'vuelidate/lib/validators';
import { InterfaceCategory } from '@/store/modules/category/types';

@Component({
  name: 'CategoriesEdit',
  components: {},
  validations: {
    categoryName: { required, minLength: minLength(3) },
    categoryLimit: { required, minValue: minValue(0) },
    currentCategory: { value: { required } },
  },
  mixins: [validationMixin],
})

export default class CategoriesEdit extends Vue {
  currentCategory: currentCategoryType = { text: '', value: '' };

  categoryName = '';

  categoryLimit = 0;

  @Getter('getCategories') categories: any;

  @Action('updateCategory') updateCategory: any;

  async formHandler() {
    if (this.$v.$invalid) {
      this.$v.$touch();
      return;
    }

    try {
      await this.updateCategory({
        id: this.currentCategory.value,
        name: this.categoryName,
        limit: this.categoryLimit,
      });
      await this.$emit('updateCategoriesList');
    } catch (e) {
      console.warn(e);
    }
  }

  selectHandler(val: string): void {
    const { name, limit } = this.categories.find((item: InterfaceCategory) => item.id === val);
    this.currentCategory = this.categoriesList.find((item: currentCategoryType) => item.value === val) || this.currentCategory;
    this.categoryName = name;
    this.categoryLimit = limit;
  }

  get categoriesList(): currentCategoryType[] {
    return this.categories.map((item: InterfaceCategory) => ({
      text: item.name,
      value: item.id,
    }));
  }

  get validateCurrentCategoryMessage(): string {
    return this.$v.currentCategory.value?.$dirty && !this.$v.currentCategory.value.required ? 'Set current category' : '';
  }

  get validateCategoryNameMessage(): string {
    let str = '';
    if (this.$v.categoryName.$dirty && !this.$v.categoryName.required) {
      str = 'Enter category name';
    } else if (this.$v.categoryName.$dirty && !this.$v.categoryName.minLength) {
      str = `Minimum category name length at least ${this.$v.categoryName.$params.minLength.min} symbols`;
    }
    return str;
  }

  get validateCategoryLimitMessage(): string {
    let str = '';
    if (this.$v.categoryLimit.$dirty && !this.$v.categoryLimit.required) {
      str = 'Enter category limit';
    } else if (this.$v.categoryLimit.$dirty && !this.$v.categoryLimit.minValue) {
      str = `Minimum value is ${this.$v.categoryLimit.$params.minValue.min}`;
    }
    return str;
  }
}

type currentCategoryType = { text: string; value: string };
</script>

<style lang="scss">

</style>
