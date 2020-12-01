<template>
  <v-row no-gutters>
    <v-col cols="12">
      <h3 class="mb-4">Edit category</h3>

      <form @submit.prevent="formHandler" class="mb-4">
        <v-select
        @change="selectHandler($event)"
        :items="categories"
        label="Categories"
        title="Categories"
        outlined/>

        <v-text-field
        label="Category name"
        title="Category name"
        outlined/>

        <v-text-field
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

@Component({
  name: 'CategoriesEdit',
  components: {},
})

export default class CategoriesEdit extends Vue {
  private categories = ['Foo', 'Bar', 'Fizz', 'Buzz'];

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
