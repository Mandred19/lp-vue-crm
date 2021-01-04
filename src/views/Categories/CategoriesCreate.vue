<template>
  <v-row no-gutters>
    <v-col cols="12">
      <h3 class="mb-4">Create category</h3>

      <form @submit.prevent="formHandler" class="mb-4">
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
        title="Create category"
        color="blue-grey"
        class="white--text">
          Create category
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
import { Action } from 'vuex-class';
import { validationMixin } from 'vuelidate';
import { minLength, minValue, required } from 'vuelidate/lib/validators';

@Component({
  name: 'CategoriesCreate',
  components: {},
  validations: {
    categoryName: { required, minLength: minLength(3) },
    categoryLimit: { required, minValue: minValue(0) },
  },
  mixins: [validationMixin],
})

export default class CategoriesCreate extends Vue {
  categoryName = '';

  categoryLimit = 0;

  @Action('createCategory') createCategory: any;

  async formHandler() {
    if (this.$v.$invalid) {
      this.$v.$touch();
      return;
    }

    try {
      await this.createCategory({
        name: this.categoryName,
        limit: this.categoryLimit,
      });
      this.resetForm();
    } catch (e) {
      console.warn(e);
    }
  }

  private resetForm(): void {
    this.categoryName = '';
    this.categoryLimit = 0;
    this.$emit('updateCategoriesList');
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
</script>

<style lang="scss">

</style>
