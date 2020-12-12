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

@Component({
  name: 'CategoriesCreate',
  components: {},
})

export default class CategoriesCreate extends Vue {
  categoryName = '';

  categoryLimit = 0;

  @Action('createCategory') createCategory: any;

  async formHandler() {
    try {
      await this.createCategory({
        name: this.categoryName,
        limit: this.categoryLimit,
      });
      this.resetForm();
    } catch (e) {}
  }

  private resetForm(): void {
    this.categoryName = '';
    this.categoryLimit = 0;
    this.$emit('updateCategoriesList');
  }
}
</script>

<style lang="scss">

</style>
